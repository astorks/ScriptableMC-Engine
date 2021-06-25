package com.pixlfox.scriptablemc.js

import co.aikar.commands.BaseCommand
import co.aikar.commands.annotation.CommandAlias
import co.aikar.commands.annotation.CommandPermission
import co.aikar.commands.annotation.Subcommand
import co.aikar.commands.annotation.Syntax
import org.bukkit.ChatColor
import org.bukkit.command.CommandSender
import org.graalvm.polyglot.PolyglotException


@Suppress("unused")
@CommandAlias("scriptablemc|smc")
@Subcommand("javascript|js")
class JavaScriptPluginEngineCommands(private val basePlugin: JavaScriptPluginEngineMain) : BaseCommand() {

    @Subcommand("reload|rl")
    @CommandAlias("jsrl")
    @CommandPermission("scriptablemc.js.reload")
    fun reload(sender: CommandSender) {
        basePlugin.reloadScriptEngine(sender)
    }

    @Subcommand("pastebin|pb")
    @CommandAlias("jspb")
    @CommandPermission("scriptablemc.js.execute.pastebin")
    @Syntax("<code>")
    fun executePastebin(sender: CommandSender, code: String) {
        val response = khttp.get("https://pastebin.com/raw/$code")
        if(response.statusCode == 200) {
            executeCode(sender, response.text)
        }
        else {
            sender.sendMessage("${ChatColor.RED}Unable to load pastebin: $code, reason: STATUS_CODE ${response.statusCode}.")
        }
    }

    @Subcommand("execute|ex")
    @CommandAlias("jsex")
    @CommandPermission("scriptablemc.js.execute")
    @Syntax("<code>")
    fun execute(sender: CommandSender, code: String) {
        executeCode(sender, code)
    }

    private fun executeCode(sender: CommandSender, code: String) {
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

    @Subcommand("file|f")
    @CommandAlias("jsexf")
    @CommandPermission("scriptablemc.js.execute.file")
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