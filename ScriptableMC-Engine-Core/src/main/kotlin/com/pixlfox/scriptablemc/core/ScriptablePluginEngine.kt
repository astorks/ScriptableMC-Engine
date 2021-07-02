package com.pixlfox.scriptablemc.core

import com.pixlfox.scriptablemc.ScriptablePluginEngineBootstrapper
import com.pixlfox.scriptablemc.ScriptablePluginEngineConfig
import com.smc.exceptions.ScriptNotFoundException
import com.smc.version.Version
import fr.minuskube.inv.InventoryManager
import org.bukkit.Bukkit
import org.bukkit.command.CommandSender
import org.graalvm.polyglot.*
import java.io.File
import java.util.*

@Suppress("MemberVisibilityCanBePrivate", "unused")
abstract class ScriptablePluginEngine {
    abstract val languageName: String
    abstract val languageFileExtension: String
    abstract val bootstrapper: ScriptablePluginEngineBootstrapper
    abstract val debugEnabled: Boolean

    abstract val scriptablePlugins: MutableList<ScriptablePluginContext>

    abstract val graalContext: Context
    abstract val globalBindings: Value

    abstract val config: ScriptablePluginEngineConfig

    val inventoryManager: InventoryManager
        get() = InventoryManager(bootstrapper)

    val pluginVersion: Version
        get() = bootstrapper.pluginVersion

    var enabledAllPlugins: Boolean = false
        internal set

    val startupErrors: MutableList<Exception> = mutableListOf()

    open fun start() {
        globalBindings.putMember("engine", this)

        loadAllHelperClasses()

        for(mainScriptFile in config.mainScriptFiles) {
            loadMainScript(mainScriptFile)
        }

        if(!enabledAllPlugins && config.autoEnablePlugins) {
            enableAllPlugins()
        }
    }

    open fun close() {
        for(scriptablePlugin in scriptablePlugins) {
            scriptablePlugin.disable()
        }
        scriptablePlugins.clear()

        graalContext.close(true)
    }

    open fun loadAllHelperClasses() {
        for(helperClass in preLoadClasses) {
            try {
                javaClass.classLoader.loadClass(if(helperClass.startsWith("*")) helperClass.substring(1) else helperClass)
            }
            catch (e: Exception) {
                if(!helperClass.startsWith("*")) {
                    bootstrapper.logger.warning("Failed to load helper class \"$helperClass\" via classloader.")
                    e.printStackTrace()
                }
            }
        }
    }

    open fun enableAllPlugins() {
        for (pluginContext in scriptablePlugins.filter { !it.isEnabled }) {
            enablePlugin(pluginContext)
        }
        enabledAllPlugins = true
    }

    open fun disableAllPlugins() {
        for (pluginContext in scriptablePlugins.filter { it.isEnabled }) {
            disablePlugin(pluginContext)
        }
        enabledAllPlugins = false
    }

    open fun enablePlugin(pluginContext: ScriptablePluginContext) {
        if(!pluginContext.isEnabled) {
            pluginContext.enable()
        }
        else {
            bootstrapper.logger.warning("Trying to enable an already-enabled scriptable plugin context.")
        }
    }

    open fun disablePlugin(pluginContext: ScriptablePluginContext) {
        if(pluginContext.isEnabled) {
            pluginContext.disable()
        }
        else {
            bootstrapper.logger.warning("Trying to disabled an already-disabled scriptable plugin context.")
        }
    }

    open fun getPluginInstance(name: String): Value? {
        return getPluginInstance(scriptablePlugins.firstOrNull { it.pluginName == name })
    }

    open fun getPluginInstance(pluginContext: ScriptablePluginContext?): Value? {
        return pluginContext?.pluginInstance
    }

    open fun eval(source: Source): Value {
        return graalContext.eval(source)
    }

    open fun evalCommandSender(source: String, sender: CommandSender): Value {
        val tempScriptFile = File("${config.rootScriptsFolder}/${UUID.randomUUID()}.$languageFileExtension")
        try {
            tempScriptFile.writeText(config.executeCommandTemplate.replace("%SOURCE%", source))

            var evalReturn = evalFile(tempScriptFile)

            if(evalReturn.canInstantiate()) {
                evalReturn = evalReturn.newInstance()
            }

            if(evalReturn.hasMember("execute") && evalReturn.canInvokeMember("execute")) {
                evalReturn.putMember("sender", sender)
                evalReturn.putMember("server", Bukkit.getServer())
                evalReturn.putMember("servicesManager", Bukkit.getServicesManager())
                return evalReturn.invokeMember("execute", sender, Bukkit.getServer(), Bukkit.getServicesManager())
            }

            return evalReturn
        }
        finally {
            tempScriptFile.delete()
        }
    }

    open fun evalFile(filePath: String): Value {
        val scriptFile = File("${config.rootScriptsFolder}/$filePath")

        return if(scriptFile.exists()) {
            eval(
                Source.newBuilder(languageName, scriptFile)
                    .name(scriptFile.name)
                    .mimeType(config.scriptMimeType)
                    .interactive(false)
                    .build()
            )
        } else {
            throw ScriptNotFoundException(scriptFile)
        }
    }

    open fun evalFile(scriptFile: File): Value {
        return if(scriptFile.exists()) {
            eval(
                Source.newBuilder(languageName, scriptFile)
                    .name(scriptFile.name)
                    .mimeType(config.scriptMimeType)
                    .interactive(false)
                    .build()
            )
        } else {
            throw ScriptNotFoundException(scriptFile)
        }
    }

    open fun eval(source: String): Value {
        return graalContext.eval(
            Source.newBuilder(languageName, source,"${UUID.randomUUID()}.$languageFileExtension")
                .mimeType(config.scriptMimeType)
                .interactive(false)
                .cached(false)
                .build()
        )
    }

    open fun loadMainScript(path: String) {
        try {
            val mainScriptFile = File(path)
            if(!mainScriptFile.parentFile.exists()) {
                mainScriptFile.parentFile.mkdirs()
            }

            if(mainScriptFile.exists()) {
                val mainReturn = eval(
                    Source.newBuilder(languageName, mainScriptFile)
                        .name(mainScriptFile.name)
                        .mimeType(config.scriptMimeType)
                        .interactive(false)
                        .build()
                )

                // Load all plugin types returned as an array
                if(mainReturn.hasArrayElements()) {
                    for (i in 0 until mainReturn.arraySize) {
                        this.loadPlugin(mainReturn.getArrayElement(i))
                    }
                }
            }
            else {
                throw ScriptNotFoundException(mainScriptFile)
            }
        }
        catch(ex: Exception) {
            startupErrors.add(ex)
        }
    }

    abstract fun loadPlugin(scriptableClass: Value): ScriptablePluginContext

    companion object {
        val preLoadClasses: Array<String> = arrayOf(
            "com.smc.version.Version",
            "com.smc.version.MinecraftVersions",

            "com.smc.utils.ItemBuilder",
            "com.smc.utils.MysqlWrapper",
            "com.smc.utils.Http",

            "com.smc.smartinvs.SmartInventory",
            "com.smc.smartinvs.SmartInventoryProvider",
            "org.apache.commons.io.FileUtils",

            "*me.clip.placeholderapi.PlaceholderAPI"
        )
    }
}