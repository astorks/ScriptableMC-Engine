package com.pixlfox.scriptablemc

import co.aikar.commands.BaseCommand
import co.aikar.commands.annotation.CommandAlias
import co.aikar.commands.annotation.CommandPermission
import co.aikar.commands.annotation.Subcommand
import co.aikar.commands.annotation.Syntax
import com.pixlfox.scriptablemc.smartinvs.MainMenu
import org.bukkit.ChatColor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.graalvm.polyglot.PolyglotException


@Suppress("unused")
@CommandAlias("scriptablemc|smc")
class ScriptablePluginCommand(private val basePlugin: ScriptEngineMain) : BaseCommand() {

    @Subcommand("info|i")
    @CommandAlias("smci")
    @CommandPermission("scriptablemc.info")
    fun info(sender: CommandSender) {
        val scriptEngine = basePlugin.scriptEngine
        val isGraalRuntime = scriptEngine?.eval("if (typeof Graal != 'undefined') { Graal.isGraalRuntime() } else { false }")?.asBoolean() == true
        sender.sendMessage("${ChatColor.GREEN}ScriptableMC Version: ${basePlugin.description.version}")

        sender.sendMessage("${ if(isGraalRuntime) ChatColor.GREEN else ChatColor.YELLOW }GraalVM Java Runtime: $isGraalRuntime")

        if(isGraalRuntime) {
            sender.sendMessage("${ChatColor.LIGHT_PURPLE}GraalVM Runtime Version: ${scriptEngine?.eval("Graal.versionGraalVM")}")
            sender.sendMessage("${ChatColor.LIGHT_PURPLE}GraalJS Engine Version: ${scriptEngine?.eval("Graal.versionJS")}")
        }
        else {
            sender.sendMessage("${ChatColor.AQUA}GraalJS Engine Version: v19.3.1")
        }
    }

    @Subcommand("version|v")
    @CommandAlias("smcv")
    @CommandPermission("scriptablemc.versioncheck")
    fun version(sender: CommandSender) {
        basePlugin.versionCheck(sender)
    }

    @Subcommand("menu|m")
    @CommandAlias("smcm")
    @CommandPermission("scriptablemc.menu")
    fun menu(player: Player) {
        MainMenu.INVENTORY.open(player)
    }

    @Subcommand("reload|rl")
    @CommandAlias("smcrl")
    @CommandPermission("scriptablemc.reload")
    fun reload(sender: CommandSender) {
        ScriptEngineMain.reloadAllScriptEngines(sender)
    }

}


@Suppress("unused")
@CommandAlias("scriptablemc|smc")
@Subcommand("python|py")
class ScriptablePluginPythonCommand(private val basePlugin: SMCPythonEngineMain) : BaseCommand() {

    private val stashMap: MutableMap<CommandSender, MutableList<String>> = mutableMapOf()

    @Subcommand("reload|rl")
    @CommandAlias("pyrl")
    @CommandPermission("scriptablemc.py.reload")
    fun reload(sender: CommandSender) {
        basePlugin.reloadScriptEngine(sender)
    }

    @Subcommand("stash|st")
    @CommandAlias("pys")
    @CommandPermission("scriptablemc.py.execute")
    @Syntax("[code]")
    fun stash(sender: CommandSender, code: String) {
        val stashList = stashMap.getOrPut(sender, { mutableListOf() })
        when {
            code.equals("clear", true) -> {
                stashList.clear()
                sender.sendMessage("JavaScript stash cleared!")
            }
            else -> {
                stashList.add(code)
                for ((index, stashMessage) in stashList.withIndex()) {
                    sender.sendMessage("[${index + 1}] $stashMessage")
                }
            }
        }
    }

    @Subcommand("stash|st")
    @CommandAlias("pys")
    @CommandPermission("scriptablemc.py.execute")
    fun stash(sender: CommandSender) {
        val stashList = stashMap.getOrPut(sender, { mutableListOf() })
        for ((index, stashMessage) in stashList.withIndex()) {
            sender.sendMessage("[${index + 1}] $stashMessage")
        }
    }

    @Subcommand("execute|ex")
    @CommandAlias("pyex")
    @CommandPermission("scriptablemc.py.execute")
    @Syntax("<code>")
    fun execute(sender: CommandSender, code: String) {
        if(code.equals("stash", true)) {
            val stashCode = stashMap.getOrPut(sender, { mutableListOf() }).joinToString("\n")

            try {
                val response = basePlugin.scriptEngine!!.evalCommandSender(stashCode, sender)
                if (!response.isNull) {
                    sender.sendMessage(response.toString())
                }
            } catch (e: PolyglotException) {
                e.printStackTrace()

                sender.sendMessage("${ChatColor.RED}$e")
                for (stackTrace in e.stackTrace) {
                    if (stackTrace.fileName?.endsWith(".js", true) == true) {
                        sender.sendMessage("${ChatColor.YELLOW}$stackTrace")
                    }
                }
            } catch (e: Exception) {
                e.printStackTrace()

                sender.sendMessage("${ChatColor.DARK_RED}$e")
                for (stackTrace in e.stackTrace) {
                    if (stackTrace.className.startsWith("com.pixlfox.scriptablemc", true)) {
                        sender.sendMessage("${ChatColor.RED}$stackTrace")
                    }
                }
            }
        }
        else {
            try {
                val response = basePlugin.scriptEngine!!.evalCommandSender(code, sender)
                if (!response.isNull) {
                    sender.sendMessage(response.toString())
                }
            } catch (e: PolyglotException) {
                e.printStackTrace()

                sender.sendMessage("${ChatColor.RED}$e")
                for (stackTrace in e.stackTrace) {
                    if (stackTrace.fileName?.endsWith(".js", true) == true) {
                        sender.sendMessage("${ChatColor.YELLOW}$stackTrace")
                    }
                }
            } catch (e: Exception) {
                e.printStackTrace()

                sender.sendMessage("${ChatColor.DARK_RED}$e")
                for (stackTrace in e.stackTrace) {
                    if (stackTrace.className.startsWith("com.pixlfox.scriptablemc", true)) {
                        sender.sendMessage("${ChatColor.RED}$stackTrace")
                    }
                }
            }
        }
    }

    @Subcommand("file|f")
    @CommandAlias("pyexf")
    @CommandPermission("scriptablemc.py.execute.file")
    @Syntax("<filePath>")
    fun executeFile(sender: CommandSender, filePath: String) {
        if(filePath.equals("main.js", true)) {
            sender.sendMessage("${ChatColor.DARK_RED}Unable to execute the main script entrypoint. Use the command /jsrl to reload scripts.")
            return
        }

        try {
            val response = basePlugin.scriptEngine!!.evalFile(filePath)
            if (!response.isNull) {
                sender.sendMessage(response.toString())
            }
        }
        catch (e: Exception) {
            e.printStackTrace()

            sender.sendMessage("${ChatColor.DARK_RED}$e")
            for (stackTrace in e.stackTrace) {
                sender.sendMessage("${ChatColor.DARK_RED}$stackTrace")
            }
        }
    }
}