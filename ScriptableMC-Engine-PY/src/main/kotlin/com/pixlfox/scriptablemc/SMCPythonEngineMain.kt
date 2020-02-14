package com.pixlfox.scriptablemc

import co.aikar.commands.PaperCommandManager
import com.pixlfox.scriptablemc.core.PythonPluginEngine
import org.bukkit.ChatColor
import org.bukkit.command.CommandSender



@Suppress("unused")
class SMCPythonEngineMain : ScriptEngineMain() {
    override val chatMessagePrefix = "${ChatColor.GRAY}[${ChatColor.DARK_AQUA}ScriptableMC-PY${ChatColor.GRAY}]${ChatColor.RESET}"

    override fun onLoad() {
        instance = this
        registerScriptEngine("py", this)
    }

    override fun onEnable() {
        commandManager = PaperCommandManager(this)
        commandManager?.registerCommand(ScriptablePluginCommand(this))
        commandManager?.registerCommand(ScriptablePluginPythonCommand(this))

        saveDefaultConfig()
        loadScriptEngine()
    }

    override fun onDisable() {
        commandManager?.unregisterCommands()
        unloadScriptEngine()
    }

    private fun unloadScriptEngine(sender: CommandSender? = null) {
        patchClassLoader {
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
        patchClassLoader {
            try {
                scriptEngine = PythonPluginEngine(this, config.getString("root_scripts_folder", "./scripts").orEmpty(), config.getBoolean("debug", false))
                scriptEngine!!.start()
                logger.info("Python engine started.")
                sender?.sendMessage("$chatMessagePrefix ${ChatColor.GREEN}Python engine started.")
            } catch (e: IllegalStateException) {
                if (e.message?.contains("Make sure the truffle-api.jar is on the classpath.", true) == true) {
                    logger.warning("Scriptable plugin engine failed to start.")
                    e.printStackTrace()
                    logger.severe("Unable to find truffle-api.jar. This shouldn't happen since it's now packaged inside the plugin, you might want to check for an updated ScriptableMC Engine release.")
                    logger.severe("ScriptableMC Engine Version: v${description.version}")
                    logger.severe("ScriptableMC-Engine Download Page: https://github.com/astorks/ScriptableMC-Engine/releases/latest")
                } else {
                    logger.warning("Scriptable plugin engine failed to start.")
                    e.printStackTrace()

                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}Python engine failed to start. Check the server console.")
                }
            } catch (e: Exception) {
                logger.warning("Python engine failed to start.")
                e.printStackTrace()

                if(sender != null) {
                    sender.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}$e")
                    for (stackTrace in e.stackTrace) {
                        sender.sendMessage("${ChatColor.DARK_RED}$stackTrace")
                    }
                }
            }
        }
    }

    override fun reloadScriptEngine(sender: CommandSender?) {
        unloadScriptEngine(sender)
        reloadConfig()
        loadScriptEngine(sender)
    }

    companion object {
        private var inst: SMCPythonEngineMain? = null
        var instance: SMCPythonEngineMain
            internal set(value) { inst = value }
            get() { return inst!! }
    }
}