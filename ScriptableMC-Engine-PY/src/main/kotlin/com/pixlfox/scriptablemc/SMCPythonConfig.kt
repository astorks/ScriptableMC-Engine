package com.pixlfox.scriptablemc

import org.bukkit.configuration.file.FileConfiguration

class SMCPythonConfig(config: FileConfiguration) : ScriptEngineConfig(config) {
    override val mainScriptFile: String
        get() = readConfigString("main_script_file", "\${root_scripts_folder}/main.py")
}