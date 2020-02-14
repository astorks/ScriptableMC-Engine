package com.pixlfox.scriptablemc

import co.aikar.commands.PaperCommandManager
import com.pixlfox.scriptablemc.core.JavaScriptPluginEngine
import org.bukkit.ChatColor
import org.bukkit.command.CommandSender



@Suppress("unused")
class SMCJavaScriptEngineMain : ScriptEngineMain() {
    override val chatMessagePrefix = "${ChatColor.GRAY}[${ChatColor.DARK_AQUA}ScriptableMC${ChatColor.GRAY}]${ChatColor.RESET}"

    override fun onLoad() {
        instance = this
        registerScriptEngine("js", this)
    }

    override fun onEnable() {
        commandManager = PaperCommandManager(this)
        commandManager?.registerCommand(ScriptablePluginCommand(this))
        commandManager?.registerCommand(ScriptablePluginJavaScriptCommand(this))

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
        patchClassLoader {
            try {
                scriptEngine = JavaScriptPluginEngine(this, config.getString("root_scripts_folder", "./scripts").orEmpty(), config.getBoolean("debug", false), config.getBoolean("extract_libs", true))
                scriptEngine!!.start()
                logger.info("JavaScript engine started.")
                sender?.sendMessage("$chatMessagePrefix ${ChatColor.GREEN}JavaScript engine started..")
            } catch (e: IllegalStateException) {
                if (e.message?.contains("Make sure the truffle-api.jar is on the classpath.", true) == true) {
                    logger.warning("JavaScript engine failed to start.")
                    e.printStackTrace()
                    logger.severe("Unable to find truffle-api.jar. This shouldn't happen since it's now packaged inside the plugin, you might want to check for an updated ScriptableMC Engine release.")
                    logger.severe("ScriptableMC Engine Version: v${description.version}")
                    logger.severe("ScriptableMC-Engine Download Page: https://github.com/astorks/ScriptableMC-Engine/releases/latest")
                } else {
                    logger.warning("JavaScript engine failed to start.")
                    e.printStackTrace()

                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}JavaScript engine failed to start. Check the server console.")
                }
            } catch (e: Exception) {
                logger.warning("JavaScript engine failed to start.")
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
        private var inst: SMCJavaScriptEngineMain? = null
        var instance: SMCJavaScriptEngineMain
            internal set(value) { inst = value }
            get() { return inst!! }
    }
}