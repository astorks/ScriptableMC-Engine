package com.pixlfox.scriptablemc.core

import com.pixlfox.scriptablemc.ScriptEngineConfig
import com.pixlfox.scriptablemc.ScriptEngineMain
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
    abstract val bootstrapPlugin: ScriptEngineMain
    abstract val debugEnabled: Boolean

    abstract val scriptablePlugins: MutableList<ScriptablePluginContext>
    abstract val inventoryManager: InventoryManager

    abstract val graalContext: Context
    abstract val globalBindings: Value

    abstract val config: ScriptEngineConfig

    val pluginVersion: Version
        get() = bootstrapPlugin.pluginVersion

    var enabledAllPlugins: Boolean = false
        internal set

    private val _startupErrors = mutableListOf<Exception>()
    val startupErrors: Array<Exception>
        get() = _startupErrors.toTypedArray()

    open fun start() {
        inventoryManager.init()
        globalBindings.putMember("engine", this)

        loadAllHelperClasses()

        for(mainScriptFile in config.mainScriptFiles) {
            try {
                loadMainScript(mainScriptFile)
            }
            catch(ex: Exception) {
                _startupErrors.add(ex)
            }
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
                    bootstrapPlugin.logger.warning("Failed to load helper class \"$helperClass\" via classloader.")
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
            bootstrapPlugin.logger.warning("Trying to enable an already-enabled scriptable plugin context.")
        }
    }

    open fun disablePlugin(pluginContext: ScriptablePluginContext) {
        if(pluginContext.isEnabled) {
            pluginContext.disable()
        }
        else {
            bootstrapPlugin.logger.warning("Trying to disabled an already-disabled scriptable plugin context.")
        }
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

    abstract fun loadMainScript(path: String)
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