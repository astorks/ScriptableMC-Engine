package com.pixlfox.scriptablemc

import org.bukkit.configuration.file.FileConfiguration

class SMCJavaScriptConfig(private val config: FileConfiguration) {
    val rootScriptsFolder: String
        get() = config.getString("root_scripts_folder", "./scripts").orEmpty()

    val debug: Boolean
        get() = config.getBoolean("debug", false)

    val extractLibs: Boolean
        get() = config.getBoolean("extract_libs", true)

    val debugger: SMCJavaScriptDebuggerConfig
        get() = SMCJavaScriptDebuggerConfig(config)
}

class SMCJavaScriptDebuggerConfig(private val config: FileConfiguration) {
    val enabled: Boolean
        get() = config.getBoolean("debugger.enabled", false)

    val address: String
        get() = config.getString("debugger.address", "127.0.0.1:9229").orEmpty()

    val waitAttached: Boolean
        get() = config.getBoolean("debugger.wait_attached", true)
}