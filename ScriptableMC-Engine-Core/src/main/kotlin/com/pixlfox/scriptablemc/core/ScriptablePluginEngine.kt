package com.pixlfox.scriptablemc.core

import com.pixlfox.scriptablemc.ScriptEngineConfig
import com.pixlfox.scriptablemc.ScriptEngineMain
import com.smc.version.Version
import fr.minuskube.inv.InventoryManager
import org.bukkit.command.CommandSender
import org.graalvm.polyglot.*
import java.io.File

@Suppress("MemberVisibilityCanBePrivate", "unused")
abstract class ScriptablePluginEngine {
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
                javaClass.classLoader.loadClass(helperClass.replace("*", ""))
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
        for (pluginContext in scriptablePlugins) {
            pluginContext.enable()
        }
        enabledAllPlugins = true
    }

    open fun enablePlugin(pluginContext: ScriptablePluginContext) {
        pluginContext.enable()
    }

    open fun disablePlugin(pluginContext: ScriptablePluginContext) {
        pluginContext.disable()
    }

    open fun eval(source: Source): Value {
        return graalContext.eval(source)
    }

    abstract fun loadMainScript(path: String)
    abstract fun evalFile(filePath: String): Value
    abstract fun evalFile(scriptFile: File): Value
    abstract fun eval(source: String): Value
    abstract fun evalCommandSender(source: String, sender: CommandSender): Value
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