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

    lateinit var jsConfig: JavaScriptPluginEngineConfig

    override fun onLoad() {
        instance = this
        registerScriptEngine(scriptLanguage, this)
        saveDefaultConfig()
    }

    override fun onEnable() {
        commandManager = PaperCommandManager(this)
        commandManager.registerCommand(ScriptablePluginEngineCommands(this))
        commandManager.registerCommand(JavaScriptPluginEngineCommands(this), true)

        server.scheduler.scheduleSyncDelayedTask(this, Runnable {
            fullLoadScriptEngine()
            enableScriptEngine()
            server.dispatchCommand(server.consoleSender, "minecraft:reload")
        })
    }

    override fun onDisable() {
        releaseScriptEngine(scriptLanguage)
        commandManager.unregisterCommands()
        unloadScriptEngine()
    }

    private fun fullUnloadScriptEngine(sender: CommandSender? = null) {
        patchClassLoader(javaClass) {
            try {
                scriptEngine.close()
                logger.info("JavaScript engine shutdown.")
                sender?.sendMessage("$chatMessagePrefix JavaScript engine shutdown.")
            } catch (e: Exception) {
                logger.warning("JavaScript engine failed to shutdown.")
                e.printStackTrace()

                sender?.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}JavaScript engine failed to shutdown. Check the server console.")
            }
        }
    }

    private fun unloadScriptEngine(sender: CommandSender? = null) {
        patchClassLoader(javaClass) {
            try {
                scriptEngine.disableAllPlugins()
                scriptEngine.unloadAllPlugins()
            } catch (e: Exception) {
                logger.warning("JavaScript engine failed to unload.")
                e.printStackTrace()

                sender?.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}JavaScript engine failed to unload. Check the server console.")
            }
        }
    }

    private fun fullLoadScriptEngine(sender: CommandSender? = null) {
        versionCheck()
        patchClassLoader(javaClass) {
            try {
                jsConfig = JavaScriptPluginEngineConfig(config)
                scriptEngine = JavaScriptPluginEngine(this, jsConfig)
                scriptEngine.start()
                if(scriptEngine.startupErrors.any()) {
                    for(error in scriptEngine.startupErrors) {
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

    private fun loadScriptEngine(sender: CommandSender? = null) {
        patchClassLoader(javaClass) {
            try {
                scriptEngine.start()
                if(scriptEngine.startupErrors.any()) {
                    for(error in scriptEngine.startupErrors) {
                        error.printStackTrace()
                        if(sender != null) {
                            sender.sendMessage("$chatMessagePrefix ${ChatColor.RED}$error")
                            for (stackTrace in error.stackTrace.filter { it.fileName?.endsWith(".js") == true }) {
                                sender.sendMessage("${ChatColor.RED}$stackTrace")
                            }
                        }
                    }

                    logger.warning("JavaScript engine reloaded with errors.")
                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.YELLOW}JavaScript engine reloaded with errors.")
                }
                else {
                    logger.info("JavaScript engine reloaded.")
                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.GREEN}JavaScript engine reloaded.")
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

                logger.severe("JavaScript engine failed to reload.")
                sender?.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}JavaScript engine failed to reload.")
            }
        }
    }

    private fun enableScriptEngine(sender: CommandSender? = null) {
        if(jsConfig.autoEnablePlugins) {
            patchClassLoader(javaClass) {
                try {
                    scriptEngine.enableAllPlugins()
                    logger.info("JavaScript engine enabled.")
                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.GREEN}JavaScript engine enabled.")
                } catch (error: Exception) {
                    error.printStackTrace()
                    if(sender != null) {
                        sender.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}$error")
                        for (stackTrace in error.stackTrace) {
                            sender.sendMessage("${ChatColor.RED}$stackTrace")
                        }
                    }

                    logger.severe("JavaScript engine failed to enable.")
                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}JavaScript engine failed to enable.")
                }
            }
        }
    }

    override fun reloadScriptEngine(sender: CommandSender?) {
        unloadScriptEngine(sender)
        saveDefaultConfig()
        reloadConfig()
        loadScriptEngine(sender)
        enableScriptEngine(sender)
    }

    fun fullReloadScriptEngine(sender: CommandSender?) {
        fullUnloadScriptEngine(sender)
        saveDefaultConfig()
        reloadConfig()
        fullLoadScriptEngine(sender)
        enableScriptEngine(sender)
    }

    companion object {
        var instance: JavaScriptPluginEngineBootstrapper? = null
            private set
    }
}