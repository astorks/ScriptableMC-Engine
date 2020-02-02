package com.pixlfox.scriptablemc

import co.aikar.commands.BaseCommand
import co.aikar.commands.annotation.CommandAlias
import co.aikar.commands.annotation.CommandPermission
import co.aikar.commands.annotation.Subcommand
import co.aikar.commands.annotation.Syntax
import com.pixlfox.scriptablemc.core.ScriptablePluginEngine
import com.pixlfox.scriptablemc.smartinvs.MainMenu
import org.bukkit.ChatColor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.graalvm.polyglot.PolyglotException


@Suppress("unused")
@CommandAlias("scriptablemc|smc")
class ScriptablePluginCommand(private val basePlugin: ScriptablePluginMain) : BaseCommand() {

    @Subcommand("info|i")
    @CommandPermission("scriptablemc.info")
    fun onSmcInfo(player: Player) {
        val scriptEngine = basePlugin.scriptEngine
        val isGraalRuntime = scriptEngine?.evalJs("if (typeof Graal != 'undefined') { Graal.isGraalRuntime() } else { false }")?.asBoolean() == true
        player.sendMessage("${ChatColor.GREEN}ScriptableMC Version: ${basePlugin.description.version}")
        player.sendMessage("${ if(isGraalRuntime) ChatColor.GREEN else ChatColor.YELLOW }GraalVM Java Runtime: $isGraalRuntime")
        if(isGraalRuntime) {
            player.sendMessage("${ChatColor.AQUA}GraalVM Runtime Version: ${scriptEngine?.evalJs("Graal.versionGraalVM")}")
            player.sendMessage("${ChatColor.AQUA}GraalJS Engine Version: ${scriptEngine?.evalJs("Graal.versionJS")}")
        }
    }

    @Subcommand("menu|m")
    @CommandPermission("scriptablemc.menu")
    fun onSmcMenu(player: Player) {
        MainMenu.INVENTORY.open(player)
    }

}


@Suppress("unused")
@CommandAlias("scriptablemc|smc")
@Subcommand("javascript|js")
class ScriptablePluginJsCommand(private val basePlugin: ScriptablePluginMain) : BaseCommand() {

    @Subcommand("reload|rl")
    @CommandAlias("jsrl")
    @CommandPermission("scriptablemc.js.reload")
    fun onSmcJsReload(sender: CommandSender) {
        basePlugin.patchClassLoader {
            try {
                basePlugin.scriptEngine!!.close()
                basePlugin.logger.info("Scripting engine shutdown.")
                basePlugin.reloadConfig()

                basePlugin.scriptEngine = ScriptablePluginEngine(
                    basePlugin,
                    basePlugin.config.getString("root_scripts_folder", "./scripts").orEmpty(),
                    basePlugin.config.getBoolean("debug", false),
                    basePlugin.config.getBoolean("extract_libs", true)
                )

                basePlugin.scriptEngine!!.start()
                basePlugin.logger.info("Scripting engine started.")

                sender.sendMessage("Javascript engine reloaded.")
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

    @Subcommand("execute|ex")
    @CommandAlias("jsex")
    @CommandPermission("scriptablemc.js.execute")
    @Syntax("<code>")
    fun onSmcJsExecute(sender: CommandSender, code: String) {
        try {
            val response = basePlugin.scriptEngine!!.evalCommandSenderJs(code, sender)
            if (!response.isNull) {
                sender.sendMessage(response.toString())
            }
        }
        catch (e: PolyglotException) {
            e.printStackTrace()

            sender.sendMessage("${ChatColor.RED}$e")
            for (stackTrace in e.stackTrace) {
                if(stackTrace.fileName?.endsWith(".js", true) == true) {
                    sender.sendMessage("${ChatColor.YELLOW}$stackTrace")
                }
            }
        }
        catch (e: Exception) {
            e.printStackTrace()

            sender.sendMessage("${ChatColor.DARK_RED}$e")
            for (stackTrace in e.stackTrace) {
                if(stackTrace.className.startsWith("com.pixlfox.scriptablemc", true)) {
                    sender.sendMessage("${ChatColor.RED}$stackTrace")
                }
            }
        }
    }

    @Subcommand("file|f")
    @CommandAlias("jsexf")
    @CommandPermission("scriptablemc.js.execute.file")
    @Syntax("<filePath>")
    fun onSmcJsExecuteFile(sender: CommandSender, filePath: String) {
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