package com.pixlfox.scriptablemc

import com.beust.klaxon.JsonArray
import com.beust.klaxon.JsonObject
import com.beust.klaxon.Parser
import org.bukkit.plugin.java.JavaPlugin
import java.io.File
import java.io.InputStream
import java.util.*
import kotlin.reflect.KClass
import kotlin.reflect.full.allSuperclasses


class TypeScriptDefinitionGenerator(args: Array<String> = arrayOf()) {

    private var loggingLevel: EnumSet<LoggingLevel> = EnumSet.of(
//        LoggingLevel.DEBUG,
        LoggingLevel.INFO,
        LoggingLevel.WARNING,
        LoggingLevel.ERROR,
        LoggingLevel.FATAL,
    )
    private var baseExportPath: String = "./lib"
    private val classList = mutableListOf<KClass<*>>()
    private val packageWhitelist: MutableList<String> = mutableListOf(
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
        "de.tr7zw"
    )
    private val packageRedirects: MutableMap<String, String> = mutableMapOf(
        "de.tr7zw.changeme" to "com.smc"
    )

    private val allowedPackagesRegex: Regex
        get() {
            val fixedPackages: MutableList<String> = mutableListOf()
            for(packageName in packageWhitelist) {
                fixedPackages.add(packageName.replace(".", "\\."))
            }

            return Regex("(${fixedPackages.joinToString("|")})(.*)?")
        }

    private fun safeName(name: String): String = when {
        name.equals("function", true) -> "_function"
        name.equals("yield", true) -> "_yield"
        name.equals("arguments", true) -> "_arguments"
        name.equals("name", true) -> "_name"
        name.equals("<set-?>", true) -> "value"
        name.equals("in", true) -> "_in"
        name.equals("with", true) -> "_with"
        else -> name
    }

    private fun safeClassName(name: String): String = when {
        name.equals("Array", false) -> "_Array"
        else -> name
    }

    private fun stripPackageName(name: String): String {
        return name.split('.').last().replace(";", "")
    }

    private fun getPackageName(name: String): String {
        val packages = name.split('.').toMutableList()

        if(packages.count() > 1) {
            packages.remove(packages.last())
        }

        val packageName = packages.joinToString(".")

        for((oldPackageName, newPackageName) in packageRedirects) {
            if(packageName.startsWith(oldPackageName))
                return packageName.replace(oldPackageName, newPackageName)
        }

        return packageName
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

    fun addWhitelistPackage(packageName: String): TypeScriptDefinitionGenerator {
        packageWhitelist.add(packageName)
        return this
    }

    fun removeWhitelistPackage(packageName: String): TypeScriptDefinitionGenerator {
        packageWhitelist.remove(packageName)
        return this
    }

    fun clearWhitelistPackages(): TypeScriptDefinitionGenerator {
        packageWhitelist.clear()
        return this
    }

    fun baseExportPath(basePath: String): TypeScriptDefinitionGenerator {
        this.baseExportPath = baseExportPath
        return this
    }

    fun clean(skipThisDir: Boolean = true): TypeScriptDefinitionGenerator {
        deleteDirectory(File(baseExportPath), skipThisDir)
        return this
    }

    fun debugClassList(): TypeScriptDefinitionGenerator {
        for (_class in classList) {
            println("- ${_class.qualifiedName}")
        }

        println("ClassList Size: ${classList.size}")

        return this
    }

    fun addDefaultClasses(): TypeScriptDefinitionGenerator {
        val classList = mutableListOf<KClass<*>>(
            com.pixlfox.scriptablemc.core.ScriptablePluginContext::class,
            com.pixlfox.scriptablemc.core.ScriptablePluginEngine::class,
            ScriptEngineMain::class,

            net.md_5.bungee.api.chat.BaseComponent::class,
            net.md_5.bungee.api.chat.TextComponent::class,
            net.md_5.bungee.api.chat.ComponentBuilder::class,
            net.md_5.bungee.api.chat.ClickEvent::class,
            net.md_5.bungee.api.chat.HoverEvent::class,
            net.md_5.bungee.api.chat.KeybindComponent::class,
            net.md_5.bungee.api.chat.ScoreComponent::class,
            net.md_5.bungee.api.chat.SelectorComponent::class,
            net.md_5.bungee.api.chat.TranslatableComponent::class,
            net.md_5.bungee.api.chat.Keybinds::class,

            com.smc.utils.ItemBuilder::class,
            com.smc.utils.MysqlWrapper::class,
            com.smc.utils.Http::class,

            com.smc.version.Version::class,
            com.smc.version.MinecraftVersions::class,

            fr.minuskube.inv.SmartInventory::class,
            com.smc.smartinvs.SmartInventoryProvider::class,
            com.smc.smartinvs.SmartInventory::class,

            org.apache.commons.io.FileUtils::class,

            com.google.common.io.ByteStreams::class,

            khttp.structures.files.FileLike::class,
            khttp.structures.authorization.Authorization::class,
            khttp.structures.authorization.BasicAuthorization::class,
            khttp.structures.cookie.Cookie::class,
            khttp.structures.cookie.CookieJar::class,
            khttp.structures.maps.CaseInsensitiveMap::class,
            khttp.structures.parameters.Parameters::class,
            khttp.requests.GenericRequest::class,
            khttp.requests.Request::class,
            khttp.responses.GenericResponse::class,
            khttp.responses.Response::class,

            de.tr7zw.changeme.nbtapi.NBTItem::class,
            de.tr7zw.changeme.nbtapi.NBTEntity::class,
            de.tr7zw.changeme.nbtapi.NBTFile::class,
            de.tr7zw.changeme.nbtapi.NBTContainer::class,

            java.io.File::class
        )

        for (_class in classList) {
            addAllClasses(_class)
        }

        println(LoggingLevel.INFO,"Added ${classList.size} classes from the default class list.")

        return this
    }

    fun addTypeSearchIndex(typeSearchIndexFilePath: String = "spigot-type-search-index.json") =
        addTypeSearchIndex(File(typeSearchIndexFilePath))
    fun addTypeSearchIndex(typeSearchIndexFile: File) =
        addTypeSearchIndex(typeSearchIndexFile.inputStream())
    fun addTypeSearchIndex(plugin: JavaPlugin, typeSearchIndexFilePath: String = "spigot-type-search-index.json") =
        addTypeSearchIndex(plugin.getResource(typeSearchIndexFilePath))

    fun addTypeSearchIndex(typeSearchIndexStream: InputStream?): TypeScriptDefinitionGenerator {
        if(typeSearchIndexStream == null) return this

        val classLoader = javaClass.classLoader
        val typeSearchData = Parser.default().parse(typeSearchIndexStream)

        val classList = mutableListOf<KClass<*>>()

        if(typeSearchData is JsonArray<*>) {
            for (typeData in typeSearchData) {
                if(typeData is JsonObject) {
                    val packageName = if (!typeData.string("p").isNullOrEmpty())
                        typeData.string("p") else typeData.string("package")

                    val className = if(!typeData.string("l").isNullOrEmpty())
                        typeData.string("l") else if(!typeData.string("c").isNullOrEmpty())
                        typeData.string("c") else typeData.string("class")

                    try {
                        classList.add(classLoader.loadClass("$packageName.$className").kotlin)
                    } catch (e: ClassNotFoundException) { }
                }
            }
        }

        for (_class in classList) {
            addAllClasses(_class)
        }

        println(LoggingLevel.INFO,"Added ${classList.size} classes from a type search index.")

        return this
    }

    fun addAllClasses(_class: KClass<*>): TypeScriptDefinitionGenerator {
        if(!_class.qualifiedName!!.matches(allowedPackagesRegex)) return this
        if(classList.contains(_class)) return this

        println(LoggingLevel.DEBUG,"Adding ${_class.qualifiedName} to the class list.")

        classList.add(_class)
        val cl = buildClassList(_class)
        for (c in cl) {
            addAllClasses(c)
        }

        return this
    }

    private fun buildClassList(_class: KClass<*>, ignoreWhitelist: Boolean = false): Array<KClass<*>> {
        val classList = mutableListOf<KClass<*>>()

        if(_class.qualifiedName!! == "org.bukkit.plugin.java.LibraryLoader") {
            // Unable to load some constructor and member classes from this class resulting in warnings.
            println(LoggingLevel.DEBUG,"Skipping building class list for ${_class.qualifiedName}")
            return classList.toTypedArray()
        }

        try {
            for (_superclass in _class.allSuperclasses) {
                if (!classList.contains(_superclass)) {
                    if (_superclass.qualifiedName!!.matches(allowedPackagesRegex)) {
                        classList.add(_superclass)
                    }
                }
            }
        }
        catch (ex: NoClassDefFoundError){
            println(LoggingLevel.WARNING, "NoClassDefFoundError was thrown for a superclass on " +
                    "${_class.qualifiedName} while building it's class list")
        }

        try {
            for(_constructor in _class.constructors) {
                for (_parameter in _constructor.parameters) {
                    if(_parameter.type.classifier is KClass<*>) {
                        val type = _parameter.type.classifier as KClass<*>
                        if (!classList.contains(type)) {
                            if (type.qualifiedName!!.matches(allowedPackagesRegex)) {
                                classList.add(type)
                            }
                        }
                    }
                }
            }
        }
        catch (ex: NoClassDefFoundError){
            println(LoggingLevel.WARNING, "NoClassDefFoundError was thrown for a constructor on " +
                    "${_class.qualifiedName} while building it's class list")
        }

        try {
            for(_member in _class.members) {
                if(_member.returnType.classifier is KClass<*>) {
                    val returnType = _member.returnType.classifier as KClass<*>
                    if (!classList.contains(returnType)) {
                        if (returnType.qualifiedName!!.matches(allowedPackagesRegex)) {
                            classList.add(returnType)
                        }
                    }
                }

                for (_parameter in _member.parameters) {
                    if(_parameter.type.classifier is KClass<*>) {
                        val type = _parameter.type.classifier as KClass<*>
                        if (!classList.contains(type)) {
                            if (type.qualifiedName!!.matches(allowedPackagesRegex)) {
                                classList.add(type)
                            }
                        }
                    }
                }
            }
        }
        catch (ex: NoClassDefFoundError){
            println(LoggingLevel.WARNING, "NoClassDefFoundError was thrown for a member on " +
                    "${_class.qualifiedName} while building it's class list")
        }

        return if(ignoreWhitelist) {
            classList.toTypedArray()
        } else {
            classList.filter { allowedPackagesRegex.matches(getPackageName(it.qualifiedName!!)) }.toTypedArray()
        }
    }

    private fun println(logLevel: LoggingLevel, message: String) {
        if(loggingLevel.contains(logLevel)) {
            println("$logLevel: $message")
        }
    }

    enum class LoggingLevel {
        DEBUG,
        INFO,
        WARNING,
        ERROR,
        FATAL
    }
}