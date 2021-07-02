package com.pixlfox.scriptablemc.js

import co.aikar.commands.PaperCommandManager
import com.pixlfox.scriptablemc.ScriptablePluginEngineCommands
import com.pixlfox.scriptablemc.ScriptablePluginEngineBootstrapper
import com.pixlfox.scriptablemc.js.core.JavaScriptPluginEngine
import org.bukkit.ChatColor
import org.bukkit.command.CommandSender


@Suppress("unused")
class JavaScriptPluginEngineBootstrapper : ScriptablePluginEngineBootstrapper() {
    override val chatMessagePrefix = "${ChatColor.GRAY}[${ChatColor.DARK_AQUA}ScriptableMC-JS${ChatColor.GRAY}]${ChatColor.RESET}"
    override val scriptLanguage = "js"

    override fun onLoad() {
        instance = this
    }

    override fun onEnable() {
        registerScriptEngine(scriptLanguage, this)

        commandManager = PaperCommandManager(this)
        commandManager?.registerCommand(ScriptablePluginEngineCommands(this))
        commandManager?.registerCommand(JavaScriptPluginEngineCommands(this), true)

        saveDefaultConfig()
        loadScriptEngine()
    }

    override fun onDisable() {
        releaseScriptEngine(scriptLanguage)
        commandManager?.unregisterCommands()
        unloadScriptEngine()
    }

    private fun unloadScriptEngine(sender: CommandSender? = null) {
        patchClassLoader(javaClass) {
            try {
                scriptEngine?.close()
                logger.info("JavaScript engine shutdown.")
                sender?.sendMessage("$chatMessagePrefix JavaScript engine shutdown.")
            } catch (e: Exception) {
                logger.warning("JavaScript engine failed to shutdown.")
                e.printStackTrace()

                sender?.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}JavaScript engine failed to shutdown. Check the server console.")
            }
        }
    }

    private fun loadScriptEngine(sender: CommandSender? = null) {
        versionCheck()
        patchClassLoader(javaClass) {
            try {
                scriptEngine = JavaScriptPluginEngine(this, JavaScriptPluginEngineConfig(config))
                scriptEngine!!.start()
                if(scriptEngine!!.startupErrors.any()) {
                    for(error in scriptEngine!!.startupErrors) {
                        error.printStackTrace()
                        if(sender != null) {
                            sender.sendMessage("$chatMessagePrefix ${ChatColor.RED}$error")
                            for (stackTrace in error.stackTrace.filter { it.fileName?.endsWith(".js") == true }) {
                                sender.sendMessage("${ChatColor.RED}$stackTrace")
                            }
                        }
                    }

                    logger.warning("JavaScript engine started with errors.")
                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.YELLOW}JavaScript engine started with errors.")
                }
                else {
                    logger.info("JavaScript engine started.")
                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.GREEN}JavaScript engine started.")
                }
            }
            catch (error: Exception) {
                error.printStackTrace()
                if(sender != null) {
                    sender.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}$error")
                    for (stackTrace in error.stackTrace) {
                        sender.sendMessage("${ChatColor.RED}$stackTrace")
                    }
                }

                logger.severe("JavaScript engine failed to start.")
                sender?.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}JavaScript engine failed to start.")
            }
        }
    }

    override fun reloadScriptEngine(sender: CommandSender?) {
        unloadScriptEngine(sender)
        saveDefaultConfig()
        reloadConfig()
        loadScriptEngine(sender)
    }

    companion object {
        var instance: JavaScriptPluginEngineBootstrapper? = null
            private set
    }
}