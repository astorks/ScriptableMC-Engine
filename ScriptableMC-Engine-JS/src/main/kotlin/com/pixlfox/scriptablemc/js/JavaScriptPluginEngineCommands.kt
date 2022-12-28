package com.pixlfox.scriptablemc.js

import co.aikar.commands.BaseCommand
import co.aikar.commands.annotation.CommandAlias
import co.aikar.commands.annotation.CommandPermission
import co.aikar.commands.annotation.Subcommand
import co.aikar.commands.annotation.Syntax
import com.github.kittinunf.fuel.httpGet
import com.github.kittinunf.result.success
import org.bukkit.ChatColor
import org.bukkit.command.CommandSender
import org.graalvm.polyglot.PolyglotException


@Suppress("unused")
@CommandAlias("scriptablemc|smc")
@Subcommand("javascript|js")
class JavaScriptPluginEngineCommands(private val bootstrapper: JavaScriptPluginEngineBootstrapper) : BaseCommand() {

//    @Subcommand("fullreload|frl")
//    @CommandAlias("jsfrl")
//    @CommandPermission("scriptablemc.js.fullreload")
//    fun fullReload(sender: CommandSender) {
//        bootstrapper.fullReloadScriptEngine(sender)
//    }

    @Subcommand("reload|rl")
    @CommandAlias("jsrl")
    @CommandPermission("scriptablemc.js.reload")
    fun reload(sender: CommandSender) {
        bootstrapper.fullReloadScriptEngine(sender)
    }

    @Subcommand("pastebin|pb")
    @CommandAlias("jsexpb")
    @CommandPermission("scriptablemc.js.execute.pastebin")
    @Syntax("<code>")
    fun executePastebin(sender: CommandSender, code: String) {
        val (_, _, result) = "https://pastebin.com/raw/$code".httpGet().responseString()
        result.success {
            executeCode(sender, it)
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
            val response = bootstrapper.scriptEngine.evalCommandSender(code, sender)

            for (key in response.memberKeys) {
                sender.sendMessage("$key: ${response.getMember(key)}")
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
            val response = bootstrapper.scriptEngine.evalFile(filePath)

            for (key in response.memberKeys) {
                sender.sendMessage("$key: ${response.getMember(key)}")
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