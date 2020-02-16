package com.pixlfox.scriptablemc.core

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

    val pluginVersion: Version
        get() = bootstrapPlugin.pluginVersion

    abstract fun start()
    abstract fun close()

    fun loadAllHelperClasses() {
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

    abstract fun evalFile(filePath: String): Value
    abstract fun evalFile(scriptFile: File): Value
    abstract fun eval(source: String): Value
    abstract fun evalCommandSender(source: String, sender: CommandSender): Value
    abstract fun eval(source: Source): Value
    abstract fun loadPlugin(scriptableClass: Value): ScriptablePluginContext
    abstract fun enableAllPlugins()
    abstract fun enablePlugin(pluginContext: ScriptablePluginContext)
    abstract fun disablePlugin(pluginContext: ScriptablePluginContext)

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