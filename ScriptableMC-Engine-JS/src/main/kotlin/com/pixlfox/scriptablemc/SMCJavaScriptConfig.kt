package com.pixlfox.scriptablemc

import org.bukkit.configuration.file.FileConfiguration

class SMCJavaScriptConfig(config: FileConfiguration) : ScriptEngineConfig(config) {
    override val mainScriptFiles: List<String>
        get() = readConfigStringList("main_script_files", listOf("\${root_scripts_folder}/main.js"))

    val commonJsModulesEnabled: Boolean
        get() = readConfigBoolean("common_js.modules_enabled", true)

    val commonJsModulesPath: String
        get() = readConfigString("common_js.modules_path", "\${root_scripts_folder}/node_modules")

    val commonJsGlobalsFile: String
        get() = readConfigString("common_js.globals_file", "globals.js")
}