package com.pixlfox.scriptablemc

import com.beust.klaxon.*
import java.io.File
import java.io.InputStream
import java.util.*
import kotlin.reflect.*
import kotlin.reflect.full.*

@Suppress("unused", "MemberVisibilityCanBePrivate")
class TypeScriptDefinitionGenerator(private val rootFolder: File = File("./"), private val configuration: Configuration = Configuration()) {

    private val pluginClassLoader: ClassLoader = PluginClassLoader(pluginsFolder)
    private val classList = mutableListOf<KClass<*>>()
    private var loggingLevel: EnumSet<LoggingLevel> = EnumSet.of(
//        LoggingLevel.DEBUG,
        LoggingLevel.INFO,
        LoggingLevel.WARNING,
        LoggingLevel.ERROR,
        LoggingLevel.FATAL,
    )

    private val sortedClassList: List<KClass<*>>
        get() = classList.filter { !isClassBlacklisted(it) }.sortedBy { it.qualifiedName }


    fun mkdirs(): TypeScriptDefinitionGenerator {
        if(!rootFolder.exists()) {
            rootFolder.mkdirs()
        }

        if(!exportFolder.exists()) {
            exportFolder.mkdirs()
        }

        if(!pluginsFolder.exists()) {
            pluginsFolder.mkdirs()
        }

        return this
    }

    fun clean(): TypeScriptDefinitionGenerator {

        deleteDirectory(exportFolder, true)

        return this
    }

    fun buildClassList(): TypeScriptDefinitionGenerator =
        this.buildDefaultClassList().buildTypeSearchIndexClassList()

    fun buildDefaultClassList(): TypeScriptDefinitionGenerator {
        val classList = mutableListOf<KClass<*>>()

        for (classDescription in configuration.defaultClasses) {
            val loadedClass = loadClass(classDescription)

            if(loadedClass != null) {
                classList.add(loadedClass)
            }
        }

        addAllClasses(classList)

        return this
    }

    fun buildTypeSearchIndexClassList(): TypeScriptDefinitionGenerator {
        val classList = mutableListOf<KClass<*>>()

        for (typeSearchIndexFilePath in configuration.typeSearchIndexFiles) {
            val typeSearchIndexFile = File(rootFolder, typeSearchIndexFilePath)

            if(typeSearchIndexFile.exists()) {
                classList.addAll(buildTypeSearchIndexClassList(typeSearchIndexFile))
            }
            else {
                println(LoggingLevel.WARNING, "Unable to read type search index file ${typeSearchIndexFile.absolutePath}, error file does not exist.")
            }
        }

        addAllClasses(classList)

        return this
    }

    fun exportClassList(): TypeScriptDefinitionGenerator {
        val file = File(rootFolder, "class-list.json")
        if(file.exists()) file.delete()
        file.parentFile.mkdirs()
        file.createNewFile()

        val classDescriptions = sortedClassList.map { ClassDescription(getPackageName(it), stripPackageName(it)) }.toTypedArray()
        file.writeText(classDescriptions.jsonToString(true))

        return this
    }

    fun exportSources(): TypeScriptDefinitionGenerator {
        val classes = sortedClassList.toTypedArray()

        generateTypeScriptDefinitions(classes)
        generateJavaScriptSources(classes)

        println(LoggingLevel.INFO, "Successfully generated ${classes.size} classes.")
        return this
    }

    fun debugClassList(): TypeScriptDefinitionGenerator {
        for (baseClass in classList) {
            println("- ${baseClass.qualifiedName}")
        }

        println("ClassList Size: ${classList.size}")
        println("Root Folder: $rootFolder")

        return this
    }

    private fun generateTypeScriptDefinitions(classes: Array<KClass<*>>) {
        for (baseClass in classes) {
            val file = File(exportFolder, "${getPackageName(baseClass).replace(".", "/")}/${stripPackageName(baseClass)}.d.ts")
            if(file.exists()) file.delete()
            file.parentFile.mkdirs()
            file.createNewFile()

            file.writeText(generateTypeScriptDefinitionSource(baseClass))

            println(LoggingLevel.INFO, "${baseClass.qualifiedName} -> ${file.path}")
        }
    }

    private fun generateJavaScriptSources(classes: Array<KClass<*>>) {
        for (baseClass in classes) {
            val file = File(
                exportFolder, "${getPackageName(baseClass).replace(".", "/")}/" +
                        "${stripPackageName(baseClass)}.js"
            )
            if (file.exists()) file.delete()
            file.parentFile.mkdirs()
            file.createNewFile()

            file.writeText(generateJavaScriptSource(baseClass))

            println(LoggingLevel.INFO, "${baseClass.qualifiedName} -> ${file.path}")
        }
    }



    private val allowedPackagesRegex: Regex
        get() = Regex("(${configuration.packageWhitelist.joinToString("|") {
            it.replace(".", "\\.")
        }})(.*)?")

    private val functionBlacklistRegex: Regex
        get() = Regex("(${configuration.functionBlacklist.joinToString("|")})")

    private val exportFolder: File
        get() = File(rootFolder, configuration.exportFolder)

    private val pluginsFolder: File
        get() = File(rootFolder, configuration.pluginsFolder)

    private val systemClassLoader: ClassLoader
        get() = javaClass.classLoader

    private fun loadClass(className: String): KClass<*>? {
        if(className == ".All Classes") return null
        val cachedClass = classList.firstOrNull { it.qualifiedName == className }
        if(cachedClass != null) return cachedClass

        try {
            return pluginClassLoader.loadClass(className).kotlin
        }
        catch (ex: ClassNotFoundException) {
            println(LoggingLevel.WARNING, ex.toString())
        }
        catch (ex: NoClassDefFoundError) {
            println(LoggingLevel.WARNING, ex.toString())
        }
        catch (ex: Exception) {
            println(LoggingLevel.ERROR, ex.toString())
        }

        return null
    }

    private fun loadClass(classDescription: ClassDescription): KClass<*>? =
        loadClass("${classDescription.packageName}.${classDescription.className.replace('.', '\$')}")

    private fun isClassAllowed(baseClass: KClass<*>): Boolean {
        val qualifiedName = baseClass.qualifiedName ?: return false
        if(isClassBlacklisted(baseClass)) return false
        return qualifiedName.matches(allowedPackagesRegex)
    }

    private fun safeName(name: String): String = when {
        configuration.safeNames.containsKey(name) -> configuration.safeNames[name]!!
        else -> name
    }

    private fun safeClassName(name: String): String = when {
        configuration.safeClassNames.containsKey(name) -> configuration.safeClassNames[name]!!
        else -> name
    }

    private fun safePackageName(name: String): String {
        for((oldPackageName, newPackageName) in configuration.packageRedirects) {
            if(name.startsWith(oldPackageName))
                return name.replace(oldPackageName, newPackageName)
        }

        return name
    }

    @OptIn(ExperimentalStdlibApi::class)
    private fun toTypeScriptType(type: KType): String {
        val isArray = if(type.classifier is KClass<*>) {
            val typeClass = type.classifier as KClass<*>

            when(typeClass.qualifiedName) {
                "kotlin.Array", "kotlin.collections.List", "kotlin.collections.Set" -> true
                else -> false
            }
        } else false

        return when {
            type == typeOf<Byte>() -> if(configuration.commentTypes) "number/*(Byte)*/" else "number"
            type == typeOf<Short>() -> if(configuration.commentTypes) "number/*(Short)*/" else "number"
            type == typeOf<Int>() -> if(configuration.commentTypes) "number/*(Int)*/" else "number"
            type == typeOf<Long>() -> if(configuration.commentTypes) "number/*(Long)*/" else "number"
            type == typeOf<Float>() -> if(configuration.commentTypes) "number/*(Float)*/" else "number"
            type == typeOf<Double>() -> if(configuration.commentTypes) "number/*(Double)*/" else "number"
            type == typeOf<String>() -> "string"
            type == typeOf<Unit>() -> "void"
            type == typeOf<Boolean>() -> "boolean"
            type == typeOf<IntArray>() -> if(configuration.commentTypes) "Array<number/*(Int)*/>" else "Array<number>"
            type == typeOf<Char>() -> if(configuration.commentTypes) "string/*(Char)*/" else "string"
            isArray -> "Array<${toTypeScriptType(type.arguments.first().type?.classifier)}>"
            else -> toTypeScriptType(type.classifier)
        }
    }

    private fun toTypeScriptType(classifier: KClassifier?): String {
        return when {
            (classifier is KClass<*>) -> toTypeScriptType(classifier)
            configuration.commentTypes -> "any/*???: ${classifier?.javaClass?.kotlin?.qualifiedName}*/"
            else -> "any"
        }
    }

    private fun toTypeScriptType(baseClass: KClass<*>): String {
        val className = stripPackageName(baseClass)

        return when {
            baseClass.qualifiedName == "kotlin.Unit" -> "void"
            baseClass.qualifiedName == "kotlin.Byte" -> if(configuration.commentTypes) "number/*(Byte)*/" else "number"
            baseClass.qualifiedName == "kotlin.Short" -> if(configuration.commentTypes) "number/*(Short)*/" else "number"
            baseClass.qualifiedName == "kotlin.Int" -> if(configuration.commentTypes) "number/*(Int)*/" else "number"
            baseClass.qualifiedName == "kotlin.Long" -> if(configuration.commentTypes) "number/*(Long)*/" else "number"
            baseClass.qualifiedName == "kotlin.Float" -> if(configuration.commentTypes) "number/*(Float)*/" else "number"
            baseClass.qualifiedName == "kotlin.Double" -> if(configuration.commentTypes) "number/*(Double)*/" else "number"
            baseClass.qualifiedName == "kotlin.String" -> "string"
            baseClass.qualifiedName == "kotlin.Unit" -> "void"
            baseClass.qualifiedName == "kotlin.Boolean" -> "boolean"
            baseClass.qualifiedName == "kotlin.IntArray" -> if(configuration.commentTypes) "Array<number/*(Int)*/>" else "Array<number>"
            baseClass.qualifiedName == "kotlin.LongArray" -> if(configuration.commentTypes) "Array<number/*(Long)*/>" else "Array<number>"
            baseClass.qualifiedName == "kotlin.Char" -> if(configuration.commentTypes) "string/*(Char)*/" else "string"
            isClassAllowed(baseClass) -> safeClassName(className)
            else -> if(configuration.commentTypes)  "any/*(${baseClass.qualifiedName})*/" else "any"
        }
    }

    private fun isClassBlacklisted(baseClass: KClass<*>): Boolean = isClassBlacklisted(baseClass.qualifiedName)

    private fun isClassBlacklisted(qualifiedName: String?): Boolean =
        if(qualifiedName.isNullOrEmpty()) true else configuration.classBlacklist.contains(qualifiedName)

    private fun isInnerClass(baseClass: KClass<*>): Boolean = baseClass.isInner || baseClass.java.isMemberClass

    private fun stripPackageName(baseClass: KClass<*>): String {
        val qualifiedName = baseClass.qualifiedName ?: return ""

        return if(isInnerClass(baseClass)) {
            safeClassName(qualifiedName.split('.').takeLast(2).joinToString("\$"))
        }
        else {
            safeClassName(qualifiedName.split('.').takeLast(1).joinToString("\$"))
        }
    }

    private fun getPackageName(baseClass: KClass<*>): String {
        val qualifiedName = baseClass.qualifiedName ?: return ""

        return if(isInnerClass(baseClass)) {
            safePackageName(qualifiedName.split('.').dropLast(2).joinToString("."))
        }
        else {
            safePackageName(qualifiedName.split('.').dropLast(1).joinToString("."))
        }
    }

    private fun addAllClasses(baseClasses: List<KClass<*>>) = addAllClasses(baseClasses.toTypedArray())

    private fun addAllClasses(baseClasses: Array<KClass<*>>) {
        for (baseClass in baseClasses)  addAllClasses(baseClass)
    }

    private fun addAllClasses(baseClass: KClass<*>) {
        if(!isClassAllowed(baseClass)) return
        if(classList.contains(baseClass)) return

        addClasses(baseClass)
        addAllClasses(buildClassList(baseClass))
    }

    private fun addClasses(baseClasses: List<KClass<*>>) = addClasses(baseClasses.toTypedArray())

    private fun addClasses(baseClasses: Array<KClass<*>>) {
        for (baseClass in baseClasses)  addClasses(baseClass)
    }

    private fun addClasses(baseClass: KClass<*>) {
        if(!isClassAllowed(baseClass)) return
        if(classList.contains(baseClass)) return
        if(configuration.classBlacklist.contains(baseClass.qualifiedName)) return

        println(LoggingLevel.DEBUG,"Adding ${baseClass.qualifiedName} to the class list.")
        classList.add(baseClass)
    }

    private fun buildTypeSearchIndexClassList(typeSearchIndexFilePath: String) =
        buildTypeSearchIndexClassList(File(rootFolder, typeSearchIndexFilePath))
    private fun buildTypeSearchIndexClassList(typeSearchIndexFile: File) =
        buildTypeSearchIndexClassList(typeSearchIndexFile.inputStream())
    private fun buildTypeSearchIndexClassList(typeSearchIndexStream: InputStream?, ignoreWhitelist: Boolean = false): Array<KClass<*>> {
        if(typeSearchIndexStream == null) return arrayOf()

        val classList = mutableListOf<KClass<*>>()
        val typeSearchIndex = Klaxon().parseArray<ClassDescription>(typeSearchIndexStream)

        if(typeSearchIndex != null) {
            for (classDescription in typeSearchIndex) {
                val loadedClass = loadClass(classDescription)

                if(loadedClass != null) {
                    classList.add(loadedClass)
                }
            }
        }

        return if(ignoreWhitelist) {
            classList.distinct().toTypedArray()
        } else {
            classList.distinct().filter { isClassAllowed(it) }.toTypedArray()
        }
    }

    private fun getClassFromType(type: KType?): KClass<*>? {
        if(type == null) return null

        val typeClassifier = type.classifier
        if (typeClassifier is KClass<*>) {
            return typeClassifier
        }

        return null
    }

    private fun getClassesFromType(type: KType?): Array<KClass<*>> {
        val classList = mutableListOf<KClass<*>>()

        if(type != null) {
            for (typeArg in type.arguments) {
                val typeArgClass = getClassFromType(typeArg.type)
                if (typeArgClass != null) classList.add(typeArgClass)
            }

            val mainClass = getClassFromType(type)
            if (mainClass != null) classList.add(mainClass)
        }

        return classList.toTypedArray()
    }

    private fun buildClassList(functions: Collection<KFunction<*>>, ignoreWhitelist: Boolean = false): Array<KClass<*>> {
        val classList = mutableListOf<KClass<*>>()

        try {
            for(function in functions) {
                if(function.visibility == KVisibility.PUBLIC) {
                    classList.addAll(getClassesFromType(function.returnType))

                    for (_parameter in function.parameters) {
                        classList.addAll(getClassesFromType(_parameter.type))
                    }
                }
            }
        }
        catch (ex: NoClassDefFoundError){
            println(LoggingLevel.WARNING, ex.toString())
        }

        return if(ignoreWhitelist) {
            classList.distinct().toTypedArray()
        } else {
            classList.distinct().filter { isClassAllowed(it) }.toTypedArray()
        }
    }

    private fun buildClassList(baseClasses: Array<KClass<*>>, ignoreWhitelist: Boolean = false): Array<KClass<*>> {
        val classList = mutableListOf<KClass<*>>()

        for (baseClass in baseClasses) {
            classList.addAll(buildClassList(baseClass, ignoreWhitelist))
        }

        return classList.distinct().toTypedArray()
    }

    private fun buildClassList(baseClass: KClass<*>, ignoreWhitelist: Boolean = false): Array<KClass<*>> {
        val classList = mutableListOf<KClass<*>>()

        if(isClassBlacklisted(baseClass)) return arrayOf()

        try {
            for (_superclass in baseClass.superclasses) {
                if (!classList.contains(_superclass)) {
                    classList.add(_superclass)
                }
            }
        }
        catch (ex: NoClassDefFoundError){
            println(LoggingLevel.WARNING, "NoClassDefFoundError was thrown for a superclass on " +
                    "${baseClass.qualifiedName} while building it's class list")
        }

        classList.addAll(buildClassList(baseClass.constructors))
        classList.addAll(buildClassList(baseClass.staticFunctions))
        classList.addAll(buildClassList(baseClass.memberFunctions))

        return if(ignoreWhitelist) {
            classList.distinct().toTypedArray()
        } else {
            classList.distinct().filter { isClassAllowed(it) }.toTypedArray()
        }
    }

    private fun generateTypeScriptDefinitionSource(baseClass: KClass<*>): String =
        "${generateTypeScriptImports(baseClass)}\n\n" +
        generateTypeScriptClassDeclaration(baseClass)

    private fun generateJavaScriptSource(baseClass: KClass<*>): String =
        "export default ${stripPackageName(baseClass)} = Java.type('${baseClass.qualifiedName}');"

    private fun generateJavaScriptIndexSource(classes: Array<KClass<*>>): String =
        generateTypeScriptImports(null, classes, "export")

    private fun generateTypeScriptImports(baseClass: KClass<*>): String =
        generateTypeScriptImports(baseClass, buildClassList(baseClass))

    private fun generateTypeScriptGroupedImports(baseClass: KClass<*>): String =
        generateTypeScriptGroupedImports(baseClass, buildClassList(baseClass))

    private fun generateTypeScriptImports(baseClass: KClass<*>?, importClasses: Array<KClass<*>>, keyword: String = "import"): String {
        if(baseClass == null && importClasses.isEmpty()) return ""
        val basePackageName = getPackageName(baseClass ?: importClasses.first())
        val baseClassFolderUri = File(exportFolder, basePackageName.replace('.', '/')).absoluteFile.toURI()
        var tsSource = ""

        for (requiredClass in importClasses.filter { it != baseClass }.sortedBy { getPackageName(it) }) {
            val requiredPackageName = getPackageName(requiredClass)
            val requiredClassName = stripPackageName(requiredClass)
            val importClassFolderUri = File(exportFolder, requiredPackageName.replace('.','/')).absoluteFile.toURI()
            val relativeImportClassFolderUri = baseClassFolderUri.relativize(importClassFolderUri)

            tsSource += "$keyword { $requiredClassName } from '"
            if(!relativeImportClassFolderUri.isAbsolute) {
                tsSource += if (
                    relativeImportClassFolderUri.path != "" &&
                    !relativeImportClassFolderUri.path.startsWith("/")
                ) "./" else "."

                tsSource += relativeImportClassFolderUri.path
                tsSource += if (!relativeImportClassFolderUri.path.endsWith("/")) "/" else ""
                tsSource += requiredClassName
            }
            else {
                tsSource += "../".repeat(basePackageName.split('.').count())
                tsSource += "${requiredPackageName.replace('.', '/')}/"
                tsSource += requiredClassName
            }
            tsSource += "';\n"
        }

        return tsSource
    }

    private fun generateTypeScriptGroupedImports(baseClass: KClass<*>, importClasses: Array<KClass<*>>, keyword: String = "import"): String {
        val basePackageName = getPackageName(baseClass)
        val baseClassFolderUri = File(exportFolder, basePackageName.replace('.', '/')).absoluteFile.toURI()
        var tsSource = ""

        for ((requiredPackageName, requiredClasses) in importClasses.filter { it != baseClass }.sortedBy { getPackageName(it) }.groupBy { getPackageName(it) }) {
            val importClassFolderUri = File(exportFolder, requiredPackageName.replace('.','/')).absoluteFile.toURI()
            val relativeImportClassFolderUri = baseClassFolderUri.relativize(importClassFolderUri)
            val classListText = requiredClasses.sortedBy { stripPackageName(it) }.joinToString(", ") { stripPackageName(it) }

            tsSource += if(!relativeImportClassFolderUri.isAbsolute)
                "$keyword { $classListText } from '." +
                        if(relativeImportClassFolderUri.path != "" && !relativeImportClassFolderUri.path.startsWith("/"))
                            "/" else { "" } +
                        relativeImportClassFolderUri.path +
                        if(!relativeImportClassFolderUri.path.endsWith("/"))
                            "/" else { "" } +
                        "index';\n"
            else {
                "$keyword { $classListText } from '${"../".repeat(basePackageName.split('.').count())}" +
                        "${requiredPackageName.replace('.', '/')}/index';\n"
            }
        }

        return tsSource
    }

    private fun generateTypeScriptParameters(parameters: List<KParameter>): String {
        if(parameters.isEmpty()) return ""

        val parameterList = mutableListOf<String>()

        for(parameter in parameters.filter { it.name != null }) {
            parameterList.add("${safeName(parameter.name!!)}: ${toTypeScriptType(parameter.type)}")
        }

        return parameterList.joinToString(", ")
    }

    private fun generateTypeScriptClassExtends(baseClass: KClass<*>): String {
        val superclasses = baseClass.superclasses.filter { isClassAllowed(it) }
        if(superclasses.isEmpty()) return ""
        return " implements ${superclasses.joinToString(", ") { toTypeScriptType(it) }}"
    }

    private fun generateTypeScriptFunctionDeclaration(function: KFunction<*>, modifiers: String = ""): String {
        return  "${modifiers}${safeName(function.name)}" +
                "(${generateTypeScriptParameters(function.parameters)})" +
                ": ${toTypeScriptType(function.returnType)};"
    }

    private fun generateTypeScriptFunctionDeclarations(functions: Collection<KFunction<*>>, linePrefix: String = "", modifiers: String = ""): String {
        var source = ""

        try {
            for (function in functions.filter {
                it.visibility == KVisibility.PUBLIC &&
                !it.name.matches(functionBlacklistRegex)
            }.sortedWith(compareBy({it.name}, {it.parameters.size}))) {
                source += "${linePrefix}\t${generateTypeScriptFunctionDeclaration(function, modifiers)}\n"
            }
        }
        catch (ex: NoClassDefFoundError) {
            println(LoggingLevel.WARNING, ex.toString())
        }

        return source
    }

    private fun generateTypeScriptClassDeclaration(baseClass: KClass<*>, linePrefix: String = ""): String {
        var tsSource =
            "${linePrefix}export declare class ${stripPackageName(baseClass)}${generateTypeScriptClassExtends(baseClass)} {\n"

        try {
            if (baseClass.java.isEnum) {
                tsSource = "/* Enum */\n$tsSource"
                val enumConstants = baseClass.java.enumConstants as Array<Enum<*>>

                for (enumConstant in enumConstants) {
                    tsSource += "${linePrefix}\tpublic static get ${enumConstant.name}(): ${stripPackageName(baseClass)}\n"
                }
            }
            else if(baseClass.java.isInterface) {
                tsSource = "/* Interface */\n$tsSource"
            }
        }
        catch (ex: Exception) {
            println(LoggingLevel.WARNING, "generateTypeScriptClassDeclaration(${baseClass.qualifiedName}): $ex")
        }


        try {
            for (constructor in baseClass.constructors.sortedWith(compareBy({it.name}, {it.parameters.size}))) {
                if (constructor.visibility == KVisibility.PUBLIC && !constructor.name.matches(functionBlacklistRegex)) {
                    tsSource += "${linePrefix}\tconstructor(${generateTypeScriptParameters(constructor.parameters)});\n"
                }
            }
        }
        catch (ex: NoClassDefFoundError) {
            println(LoggingLevel.WARNING, "generateTypeScriptClassDeclaration(${baseClass.qualifiedName}): $ex")
        }

        tsSource += generateTypeScriptFunctionDeclarations(baseClass.staticFunctions, linePrefix, "public static ")
        tsSource += generateTypeScriptFunctionDeclarations(baseClass.memberFunctions, linePrefix, "public ")

        tsSource += "${linePrefix}}\n\n"
        return tsSource
    }

    private fun println(logLevel: LoggingLevel, message: String) {
        if(loggingLevel.contains(logLevel)) {
            println("$logLevel: $message")
        }
    }

    companion object {
        fun fromConfigFile(configFilePath: String): TypeScriptDefinitionGenerator {
            val configFile = File(configFilePath)
            val rootFolder = configFile.parentFile
            val configuration = Klaxon().parse<Configuration>(configFile)!!
            return TypeScriptDefinitionGenerator(rootFolder, configuration)
        }

        fun fromConfigStream(rootFolderPath: String, inputStream: InputStream): TypeScriptDefinitionGenerator {
            val rootFolder = File(rootFolderPath)
            val configuration = Klaxon().parse<Configuration>(inputStream)!!
            return TypeScriptDefinitionGenerator(rootFolder, configuration)
        }

        fun Any.jsonToString(prettyPrint: Boolean = true): String {
            val thisJsonString = Klaxon().toJsonString(this)
            var result = thisJsonString
            if(prettyPrint) {
                result = if(thisJsonString.startsWith("[")){
                    Klaxon().parseJsonArray(thisJsonString.reader()).toJsonString(true)
                } else {
                    Klaxon().parseJsonObject(thisJsonString.reader()).toJsonString(true)
                }
            }
            return result
        }

        private fun deleteDirectory(directoryToBeDeleted: File, skipThisDir: Boolean = false): Boolean {
            val allContents = directoryToBeDeleted.listFiles()
            if (allContents != null) {
                for (file in allContents) {
                    deleteDirectory(file)
                }
            }

            return if(skipThisDir) {
                true
            }
            else {
                directoryToBeDeleted.delete()
            }
        }
    }

    enum class LoggingLevel {
        DEBUG,
        INFO,
        WARNING,
        ERROR,
        FATAL
    }

    class Configuration (
        val exportFolder: String = "./lib/",
        val pluginsFolder: String = "./plugins/",
        val commentTypes: Boolean = true,
        val packageWhitelist: Array<String> = arrayOf(
            "java.lang",
            "org.bukkit",
            "net.md_5.bungee.api",
            "com.pixlfox.scriptablemc",
            "com.smc",
            "fr.minuskube.inv",
            "com.google",
            "java.sql",
            "java.io",
            "khttp",
            "org.apache.commons.io",
            "de.tr7zw",
        ),
        val classBlacklist: Array<String> = arrayOf(
            "org.bukkit.plugin.java.LibraryLoader",
        ),
        val functionBlacklist: Array<String> = arrayOf(
            "wait",
            "equals",
            "toString",
            "hashCode",
            "getClass",
            "notify",
            "notifyAll",
            "(.*?)\\\$(.*?)",
        ),
        val packageRedirects: Map<String, String> = mapOf(
            "de.tr7zw.changeme" to "com.smc",
        ),
        val safeNames: Map<String, String> = mapOf(
            "function" to "_function",
            "yield" to "_yield",
            "arguments" to "_arguments",
            "name" to "_name",
            "<set-?>" to "value",
            "in" to "_in",
            "with" to "_with",
        ),
        val safeClassNames: Map<String, String> = mapOf(
            "Array" to "_Array",
        ),
        val defaultClasses: Array<ClassDescription> = arrayOf(
            ClassDescription("com.pixlfox.scriptablemc.core", "ScriptablePluginContext"),
            ClassDescription("com.pixlfox.scriptablemc.core", "ScriptablePluginEngine"),
            ClassDescription("com.pixlfox.scriptablemc.core", "ScriptEngineMain"),
            ClassDescription("com.smc.utils", "ItemBuilder"),
            ClassDescription("com.smc.utils", "MysqlWrapper"),
            ClassDescription("com.smc.utils", "Http"),
            ClassDescription("com.smc.version", "Version"),
            ClassDescription("com.smc.version", "MinecraftVersions"),
            ClassDescription("com.smc.smartinvs", "SmartInventoryProvider"),
            ClassDescription("com.smc.smartinvs", "SmartInventory"),
            ClassDescription("fr.minuskube.inv", "SmartInventory"),
            ClassDescription("net.md_5.bungee.api.chat", "BaseComponent"),
            ClassDescription("net.md_5.bungee.api.chat", "TextComponent"),
            ClassDescription("net.md_5.bungee.api.chat", "ComponentBuilder"),
            ClassDescription("net.md_5.bungee.api.chat", "ClickEvent"),
            ClassDescription("net.md_5.bungee.api.chat", "HoverEvent"),
            ClassDescription("net.md_5.bungee.api.chat", "KeybindComponent"),
            ClassDescription("net.md_5.bungee.api.chat", "ScoreComponent"),
            ClassDescription("net.md_5.bungee.api.chat", "SelectorComponent"),
            ClassDescription("net.md_5.bungee.api.chat", "TranslatableComponent"),
            ClassDescription("net.md_5.bungee.api.chat", "Keybinds"),
            ClassDescription("de.tr7zw.changeme.nbtapi", "NBTItem"),
            ClassDescription("de.tr7zw.changeme.nbtapi", "NBTEntity"),
            ClassDescription("de.tr7zw.changeme.nbtapi", "NBTFile"),
            ClassDescription("de.tr7zw.changeme.nbtapi", "NBTContainer"),
            ClassDescription("org.apache.commons.io", "FileUtils"),
            ClassDescription("com.google.common.io", "ByteStreams"),
            ClassDescription("khttp.structures.files", "FileLike"),
            ClassDescription("khttp.structures.authorization", "Authorization"),
            ClassDescription("khttp.structures.authorization", "BasicAuthorization"),
            ClassDescription("khttp.structures.cookie", "Cookie"),
            ClassDescription("khttp.structures.cookie", "CookieJar"),
            ClassDescription("khttp.structures.maps", "CaseInsensitiveMap"),
            ClassDescription("khttp.structures.parameters", "Parameters"),
            ClassDescription("khttp.requests", "GenericRequest"),
            ClassDescription("khttp.requests", "Request"),
            ClassDescription("khttp.responses", "GenericResponse"),
            ClassDescription("khttp.responses", "Response"),
        ),
        val typeSearchIndexFiles: Array<String> = arrayOf(
            "./spigot-type-search-index.json",
        ),
        ) {
        companion object {
            fun fromJsonObject(configJson: String): Configuration? {
                return Klaxon().parse<Configuration>(configJson)
            }
        }
    }

    class ClassDescription (
        @Json(name = "p", index = 0)
        val packageName: String = "",
        @Json(name = "l", index = 1)
        val className: String = "",
    ) {
        companion object {
            fun fromJsonObject(): ClassDescription {
                return ClassDescription("", "")
            }
        }
    }
}

