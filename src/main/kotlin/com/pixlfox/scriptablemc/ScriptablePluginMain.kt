package com.pixlfox.scriptablemc

import co.aikar.commands.PaperCommandManager
import com.pixlfox.scriptablemc.core.ScriptablePluginEngine
import com.smc.version.MinecraftVersion
import org.bukkit.ChatColor
import org.bukkit.command.CommandSender
import org.bukkit.event.Listener
import org.bukkit.plugin.java.JavaPlugin

val chatMessagePrefix = "${ChatColor.GRAY}[${ChatColor.DARK_AQUA}ScriptableMC${ChatColor.GRAY}]${ChatColor.RESET}"

@Suppress("unused")
class ScriptablePluginMain : JavaPlugin(), Listener {
    internal var scriptEngine: ScriptablePluginEngine? = null
    private var commandManager: PaperCommandManager? = null

    override fun onLoad() {
        instance = this
    }

    override fun onEnable() {
        commandManager = PaperCommandManager(this)
        commandManager?.registerCommand(ScriptablePluginCommand(this))
        commandManager?.registerCommand(ScriptablePluginJavaScriptCommand(this))

        saveDefaultConfig()
        loadScriptEngine()
    }

    override fun onDisable() {
        unloadScriptEngine()
    }

    private fun unloadScriptEngine(sender: CommandSender? = null) {
        patchClassLoader {
            try {
                scriptEngine?.close()
                logger.info("Scriptable plugin engine shutdown.")
                sender?.sendMessage("Scriptable plugin engine shutdown.")
            } catch (e: Exception) {
                logger.warning("Scriptable plugin engine failed to shutdown.")
                e.printStackTrace()

                sender?.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}Scriptable plugin engine failed to shutdown. Check the server console.")
            }
        }
    }

    private fun loadScriptEngine(sender: CommandSender? = null) {
        versionCheck()
        patchClassLoader {
            try {
                scriptEngine = ScriptablePluginEngine(this, config.getString("root_scripts_folder", "./scripts").orEmpty(), config.getBoolean("debug", false), config.getBoolean("extract_libs", true))
                scriptEngine!!.start()
                logger.info("Scriptable plugin engine started.")
                sender?.sendMessage("$chatMessagePrefix ${ChatColor.GREEN}Scriptable plugin engine started..")
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

                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.DARK_RED}Scriptable plugin engine failed to start. Check the server console.")
                }
            } catch (e: Exception) {
                logger.warning("Scriptable plugin engine failed to start.")
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

    fun reloadScriptEngine(sender: CommandSender? = null) {
        unloadScriptEngine(sender)
        reloadConfig()
        loadScriptEngine(sender)
    }

    fun versionCheck(sender: CommandSender? = null) {
        if(config.getBoolean("version_check", true)) {
            val pluginVersion = "v${description.version}"
            khttp.async.get("https://api.github.com/repos/astorks/ScriptableMC-Engine/releases/latest") {
                val githubReleaseInfo = this.jsonObject
                val releaseTag = githubReleaseInfo.getString("tag_name")
                val latestReleaseVersion = MinecraftVersion.parse(releaseTag.substring(1))
                val currentVersion = MinecraftVersion.parse(pluginVersion.substring(1))
                val releaseLink = githubReleaseInfo.getString("html_url")

                if (currentVersion.isBefore(latestReleaseVersion)) {
                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.YELLOW}An update was found.")
                    sender?.sendMessage("$chatMessagePrefix CurrentVersion: $pluginVersion, LatestRelease: $releaseTag.")
                    sender?.sendMessage("$chatMessagePrefix Download Page: $releaseLink")
                    logger.warning("An update was found. CurrentVersion: $pluginVersion, LatestRelease: $releaseTag")
                    logger.fine("Download Page: $releaseLink")
                }
                else {
                    sender?.sendMessage("$chatMessagePrefix No updates found.")
                    sender?.sendMessage("$chatMessagePrefix CurrentVersion: $pluginVersion, LatestRelease: $releaseTag")
                    if (config.getBoolean("debug", false)) {
                        logger.info("No updates found. CurrentVersion: $pluginVersion, LatestRelease: $releaseTag")
                    }
                }
            }
        }
    }

    /**
     * Patches the bukkit class loader to allow for GraalVM class loading from inside plugin jar.
     * A bit hackish but it works.
     * https://stackoverflow.com/questions/56712178/graalvm-no-language-and-polyglot-implementation-was-found-on-the-classpath
     */
    internal fun patchClassLoader(callback: () -> Unit) {
        val oldCl = Thread.currentThread().contextClassLoader
        Thread.currentThread().contextClassLoader = javaClass.classLoader
        callback()
        Thread.currentThread().contextClassLoader = oldCl
    }

    companion object {
        private var inst: ScriptablePluginMain? = null
        var instance: ScriptablePluginMain
            internal set(value) { inst = value }
            get() { return inst!! }
    }
}