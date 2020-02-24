package com.pixlfox.scriptablemc

import org.bukkit.configuration.file.FileConfiguration

class SMCJavaScriptConfig(config: FileConfiguration) : ScriptEngineConfig(config) {
    override val mainScriptFiles: List<String>
        get() = readConfigStringList("main_script_files", listOf("\${root_scripts_folder}/main.js"))

    override val executeCommandTemplate: String
        get() = readConfigString("execute_command_template", "import * as lib from './lib/global.js';\n" +
                "new (class EvalCommandSenderContext {\n" +
                "  execute(sender, server, servicesManager) {\n" +
                "    %SOURCE%\n" +
                "  }\n" +
                "})()")

    override val scriptMimeType: String
        get() = readConfigString("script_mime_type", "application/javascript+module")

    val commonJsModulesEnabled: Boolean
        get() = readConfigBoolean("common_js.modules_enabled", true)

    val commonJsModulesPath: String
        get() = readConfigString("common_js.modules_path", "\${root_scripts_folder}/node_modules")

    val commonJsGlobalsFile: String
        get() = readConfigString("common_js.globals_file", "globals.js")
}