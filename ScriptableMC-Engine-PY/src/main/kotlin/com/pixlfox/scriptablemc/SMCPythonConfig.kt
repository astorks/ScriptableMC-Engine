package com.pixlfox.scriptablemc

import org.bukkit.configuration.file.FileConfiguration

class SMCPythonConfig(config: FileConfiguration) : ScriptEngineConfig(config) {
    override val mainScriptFiles: List<String>
        get() = readConfigStringList("main_script_files", listOf("\${root_scripts_folder}/main.py"))

    override val executeCommandTemplate: String
        get() = readConfigString("execute_command_template", "")

    override val scriptMimeType: String
        get() = readConfigString("script_mime_type", "text/x-python")
}