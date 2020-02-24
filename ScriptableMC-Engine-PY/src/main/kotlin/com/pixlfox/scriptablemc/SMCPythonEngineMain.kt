package com.pixlfox.scriptablemc

import co.aikar.commands.PaperCommandManager
import com.pixlfox.scriptablemc.core.PythonPluginEngine
import org.bukkit.ChatColor
import org.bukkit.command.CommandSender



@Suppress("unused")
class SMCPythonEngineMain : ScriptEngineMain() {
    override val chatMessagePrefix = "${ChatColor.GRAY}[${ChatColor.DARK_AQUA}ScriptableMC-PY${ChatColor.GRAY}]${ChatColor.RESET}"
    override val scriptLanguage = "python"

    override fun onLoad() {
        instance = this
    }

    override fun onEnable() {
        registerScriptEngine(scriptLanguage, this)
        commandManager = PaperCommandManager(this)
        commandManager?.registerCommand(ScriptEngineGlobalCommands(this))
        commandManager?.registerCommand(SMCPythonEngineCommands(this))

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
                logger.info("Python engine shutdown.")
                sender?.sendMessage("$chatMessagePrefix Python engine shutdown.")
            } catch (e: Exception) {
                logger.warning("Python engine failed to shutdown.")
                e.printStackTrace()

                sender?.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}Python engine failed to shutdown. Check the server console.")
            }
        }
    }

    private fun loadScriptEngine(sender: CommandSender? = null) {
        versionCheck()
        patchClassLoader(javaClass) {
            try {
                scriptEngine = PythonPluginEngine(this, SMCPythonConfig(config))
                scriptEngine!!.start()

                if(scriptEngine!!.startupErrors.any()) {
                    for(error in scriptEngine!!.startupErrors) {
                        error.printStackTrace()
                        if(sender != null) {
                            sender.sendMessage("$chatMessagePrefix ${ChatColor.RED}$error")
                            for (stackTrace in error.stackTrace.filter { it.fileName?.endsWith(".py") == true }) {
                                sender.sendMessage("${ChatColor.RED}$stackTrace")
                            }
                        }
                    }

                    logger.warning("Python engine started with errors.")
                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.YELLOW}Python engine started with errors.")
                }
                else {
                    logger.info("Python engine started.")
                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.GREEN}Python engine started.")
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

                logger.severe("Python engine failed to start.")
                sender?.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}Python engine failed to start.")
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
        var instance: SMCPythonEngineMain? = null
            private set
    }
}