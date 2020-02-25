package com.pixlfox.scriptablemc

import org.bukkit.configuration.file.FileConfiguration

abstract class ScriptEngineConfig(private val config: FileConfiguration) {
    val rootScriptsFolder: String
        get() = readConfigString("root_scripts_folder", "./scripts")

    abstract val mainScriptFiles: List<String>
    abstract val executeCommandTemplate: String
    abstract val scriptMimeType: String

    val autoEnablePlugins: Boolean
        get() = readConfigBoolean("auto_enable_plugins", true)

    val debug: Boolean
        get() = readConfigBoolean("debug", false)

    val extractLibs: Boolean
        get() = readConfigBoolean("extract_libs", true)

    val debugger: ScriptEngineDebuggerConfig
        get() = ScriptEngineDebuggerConfig(this)

    @JvmOverloads
    fun readConfigString(path: String, def: String = ""): String {
        val input = config.getString(path, def).orEmpty()
        val regex = Regex("\\\$\\{(.*)}")

        return regex.replace(input) {
            val configValue = readConfigString(it.groups[1]!!.value)
            configValue
        }
    }

    @JvmOverloads
    fun readConfigStringList(path: String, def: List<String> = listOf()): List<String> {
        val inputList = config.getStringList(path)
        val regex = Regex("\\\$\\{(.*)}")

        if(inputList.isEmpty()) {
            inputList.addAll(def)
        }

        for((index, input) in inputList.withIndex()) {
            inputList[index] = regex.replace(input) {
                val configValue = readConfigString(it.groups[1]!!.value)
                configValue
            }
        }

        return inputList
    }

    @JvmOverloads
    fun readConfigBoolean(path: String, def: Boolean = false): Boolean {
        return readConfigString(path, def.toString()).equals("true", true)
    }
}

class ScriptEngineDebuggerConfig(private val config: ScriptEngineConfig) {
    val enabled: Boolean
        get() = config.readConfigBoolean("debugger.enabled", false)

    val address: String
        get() = config.readConfigString("debugger.address", "127.0.0.1:9229")

    val waitAttached: Boolean
        get() = config.readConfigBoolean("debugger.wait_attached", true)
}