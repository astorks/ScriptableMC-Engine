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
                logger.info("Python engine started.")
                sender?.sendMessage("$chatMessagePrefix ${ChatColor.GREEN}Python engine started.")
            } catch (e: IllegalStateException) {
                if (e.message?.contains("Make sure the truffle-api.jar is on the classpath.", true) == true) {
                    logger.warning("Python engine failed to start.")
                    e.printStackTrace()
                    logger.severe("Unable to find truffle-api.jar. This shouldn't happen since it's now packaged inside the plugin, you might want to check for an updated ScriptableMC Engine release.")
                    logger.severe("ScriptableMC Engine Version: $pluginVersion")
                    logger.severe("ScriptableMC-Engine Download Page: https://github.com/astorks/ScriptableMC-Engine/releases/latest")

                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}Python engine failed to start. Check the server console.")
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