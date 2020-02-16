package com.pixlfox.scriptablemc

import co.aikar.commands.BaseCommand
import co.aikar.commands.annotation.CommandAlias
import co.aikar.commands.annotation.CommandPermission
import co.aikar.commands.annotation.Subcommand
import org.bukkit.ChatColor
import org.bukkit.command.CommandSender

@Suppress("unused")
@CommandAlias("scriptablemc|smc")
class ScriptEngineGlobalCommands(private val basePlugin: ScriptEngineMain) : BaseCommand() {

    @Subcommand("info|i")
    @CommandAlias("smci")
    @CommandPermission("scriptablemc.info")
    fun info(sender: CommandSender) {
        sender.sendMessage("-----------------------------------------------------")
        sender.sendMessage("- ${ChatColor.DARK_PURPLE}ScriptableMC Version: ${basePlugin.description.version}")
        sender.sendMessage("-----------------------------------------------------")
        for (scriptEngineMain in ScriptEngineMain.getAllScriptEngines()) {
            if (scriptEngineMain.scriptLanguage == "js") {
                val scriptEngine = scriptEngineMain.scriptEngine
                val isGraalRuntime = scriptEngine?.eval("if (typeof Graal != 'undefined') { Graal.isGraalRuntime() } else { false }")?.asBoolean() == true

                sender.sendMessage("- ${ChatColor.DARK_GREEN}ScriptableMC JavaScript Engine: ${scriptEngineMain.pluginVersion}")
                sender.sendMessage("- ${ if(isGraalRuntime) ChatColor.GREEN else ChatColor.YELLOW }GraalVM Java Runtime: $isGraalRuntime")
                if(isGraalRuntime) {
                    sender.sendMessage("${ChatColor.GREEN}GraalVM Runtime Version: ${scriptEngine?.eval("Graal.versionGraalVM")}")
                    sender.sendMessage("${ChatColor.GREEN}GraalJS Version: ${scriptEngine?.eval("Graal.versionJS")}")
                }
                else {
                    sender.sendMessage("- ${ChatColor.GREEN}GraalJS Engine Version: v19.3.1")
                }
                sender.sendMessage("-----------------------------------------------------")
            }
            else if(scriptEngineMain.scriptLanguage == "python") {
                sender.sendMessage("- ${ChatColor.DARK_BLUE}ScriptableMC Python Engine: ${scriptEngineMain.pluginVersion}")
                sender.sendMessage("- ${ChatColor.BLUE}GraalPython Version: v19.3.1")
                sender.sendMessage("-----------------------------------------------------")

            }
        }
    }

    @Subcommand("version|v")
    @CommandAlias("smcv")
    @CommandPermission("scriptablemc.versioncheck")
    fun version(sender: CommandSender) {
        basePlugin.versionCheck(sender)
    }

    @Subcommand("reload|rl")
    @CommandAlias("smcrl")
    @CommandPermission("scriptablemc.reload")
    fun reload(sender: CommandSender) {
        ScriptEngineMain.reloadAllScriptEngines(sender)
    }

}