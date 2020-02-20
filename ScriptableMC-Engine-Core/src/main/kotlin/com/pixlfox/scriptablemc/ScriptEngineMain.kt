package com.pixlfox.scriptablemc

import co.aikar.commands.PaperCommandManager
import com.pixlfox.scriptablemc.core.ScriptablePluginEngine
import com.smc.version.Version
import org.bukkit.ChatColor
import org.bukkit.command.CommandSender
import org.bukkit.plugin.java.JavaPlugin

@Suppress("unused")
abstract class ScriptEngineMain : JavaPlugin() {
    var scriptEngine: ScriptablePluginEngine? = null
    var commandManager: PaperCommandManager? = null
    abstract val chatMessagePrefix: String
    abstract val scriptLanguage: String

    val pluginVersion: Version
        get() = Version.parse("v${description.version}")

    abstract fun reloadScriptEngine(sender: CommandSender? = null)

    fun versionCheck(sender: CommandSender? = null) {
        if(config.getBoolean("version_check", true)) {
            khttp.async.get("https://api.github.com/repos/astorks/ScriptableMC-Engine/releases/latest") {
                val githubReleaseInfo = this.jsonObject
                val latestReleaseVersion = Version.parse(githubReleaseInfo.getString("tag_name"))
                val currentVersion = Version.parse("v${description.version}")
                val releaseLink = githubReleaseInfo.getString("html_url")

                if (currentVersion.isBefore(latestReleaseVersion)) {
                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.YELLOW}An update was found.")
                    sender?.sendMessage("$chatMessagePrefix CurrentVersion: $currentVersion, LatestRelease: $latestReleaseVersion.")
                    sender?.sendMessage("$chatMessagePrefix Download Page: $releaseLink")
                    logger.warning("An update was found. CurrentVersion: $currentVersion, LatestRelease: $latestReleaseVersion")
                    logger.fine("Download Page: $releaseLink")
                }
                else {
                    sender?.sendMessage("$chatMessagePrefix No updates found.")
                    sender?.sendMessage("$chatMessagePrefix CurrentVersion: $currentVersion, LatestRelease: $latestReleaseVersion")
                    if (config.getBoolean("debug", false)) {
                        logger.info("No updates found. CurrentVersion: $currentVersion, LatestRelease: $latestReleaseVersion")
                    }
                }
            }
        }
    }

    companion object {
        private val scriptEngines: MutableMap<String, ScriptEngineMain?> = mutableMapOf()
        /**
         * Patches the bukkit class loader to allow for GraalVM class loading from inside plugin jar.
         * A bit hackish but it works.
         * https://stackoverflow.com/questions/56712178/graalvm-no-language-and-polyglot-implementation-was-found-on-the-classpath
         */
        fun patchClassLoader(_class: Class<*>, callback: () -> Unit) {
            val oldCl = Thread.currentThread().contextClassLoader
            Thread.currentThread().contextClassLoader = _class.classLoader
            callback()
            Thread.currentThread().contextClassLoader = oldCl
        }

        @JvmStatic
        fun registerScriptEngine(language: String, scriptEngineMain: ScriptEngineMain) {
            scriptEngines[language] = scriptEngineMain
        }

        @JvmStatic
        fun releaseScriptEngine(language: String) {
            scriptEngines[language] = null
        }

        @JvmStatic
        fun resolveScriptEngine(language: String): ScriptEngineMain? {
            return scriptEngines.getOrDefault(language, null)
        }

        @JvmStatic
        fun getAllScriptEngines(): Array<ScriptEngineMain> {
            return scriptEngines.values.filterNotNull().toTypedArray()
        }

        @JvmStatic @JvmOverloads
        fun reloadAllScriptEngines(sender: CommandSender? = null) {
            for(scriptEngine in getAllScriptEngines()) {
                scriptEngine.reloadScriptEngine(sender)
            }
        }
    }
}