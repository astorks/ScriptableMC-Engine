package com.pixlfox.scriptablemc

import co.aikar.commands.PaperCommandManager
import com.pixlfox.scriptablemc.core.ScriptablePluginEngine
import com.smc.version.Version
import org.bukkit.command.CommandSender
import org.bukkit.plugin.java.JavaPlugin
import java.io.File
import java.io.FileOutputStream
import java.io.IOException
import java.io.OutputStream
import java.util.logging.Level

@Suppress("unused", "MemberVisibilityCanBePrivate")
abstract class ScriptablePluginEngineBootstrapper : JavaPlugin() {
    lateinit var scriptEngine: ScriptablePluginEngine
    lateinit var commandManager: PaperCommandManager
    abstract val chatMessagePrefix: String
    abstract val scriptLanguage: String

    lateinit var sharedDataFolder: File

    val pluginVersion: Version
        get() = Version.parse("v${description.version}")

    abstract fun reloadScriptEngine(sender: CommandSender? = null)

    override fun onLoad() {
        sharedDataFolder = File(file.parent, "ScriptableMC")
        registerScriptEngine(scriptLanguage, this)
    }

    override fun saveResource(resourcePath: String, replace: Boolean) {
        val resourceStream = getResource(resourcePath.replace('\\', '/'))
            ?: throw IllegalArgumentException("The embedded resource '$resourcePath' cannot be found in $file")
        val outFile = File(sharedDataFolder, resourcePath)
        val lastIndex = resourcePath.lastIndexOf('/')
        val outDir = File(sharedDataFolder, resourcePath.substring(0, if (lastIndex >= 0) lastIndex else 0))
        if (!outDir.exists()) {
            outDir.mkdirs()
        }
        try {
            if (!outFile.exists() || replace) {
                val out: OutputStream = FileOutputStream(outFile)
                val buf = ByteArray(1024)
                var len: Int
                while (resourceStream.read(buf).also { len = it } > 0) {
                    out.write(buf, 0, len)
                }
                out.close()
                resourceStream.close()
            } else {
                logger.log(
                    Level.WARNING,
                    "Could not save " + outFile.name + " to " + outFile + " because " + outFile.name + " already exists."
                )
            }
        } catch (ex: IOException) {
            logger.log(Level.SEVERE, "Could not save " + outFile.name + " to " + outFile, ex)
        }
    }

    override fun saveDefaultConfig() {

    }

    override fun saveConfig() {
        super.saveConfig()
    }

    fun versionCheck(sender: CommandSender? = null) {
//        if(config.getBoolean("version_check", true)) {
//            khttp.async.get("https://api.github.com/repos/astorks/ScriptableMC-Engine/releases/latest") {
//                val githubReleaseInfo = this.jsonObject
//                val latestReleaseVersion = Version.parse(githubReleaseInfo.getString("tag_name"))
//                val currentVersion = Version.parse("v${description.version}")
//                val releaseLink = githubReleaseInfo.getString("html_url")
//
//                if (currentVersion.isBefore(latestReleaseVersion)) {
//                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.YELLOW}An update was found.")
//                    sender?.sendMessage("$chatMessagePrefix CurrentVersion: $currentVersion, LatestRelease: $latestReleaseVersion.")
//                    sender?.sendMessage("$chatMessagePrefix Download Page: $releaseLink")
//                    logger.warning("An update was found. CurrentVersion: $currentVersion, LatestRelease: $latestReleaseVersion")
//                    logger.fine("Download Page: $releaseLink")
//                }
//                else {
//                    sender?.sendMessage("$chatMessagePrefix No updates found.")
//                    sender?.sendMessage("$chatMessagePrefix CurrentVersion: $currentVersion, LatestRelease: $latestReleaseVersion")
//                    if (config.getBoolean("debug", false)) {
//                        logger.info("No updates found. CurrentVersion: $currentVersion, LatestRelease: $latestReleaseVersion")
//                    }
//                }
//            }
//        }
    }

    companion object {
        private val scriptEngines: MutableMap<String, ScriptablePluginEngineBootstrapper?> = mutableMapOf()
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
        fun registerScriptEngine(language: String, scriptEngineMain: ScriptablePluginEngineBootstrapper) {
            scriptEngines[language] = scriptEngineMain
        }

        @JvmStatic
        fun releaseScriptEngine(language: String) {
            scriptEngines[language] = null
        }

        @JvmStatic
        fun resolveScriptEngine(language: String): ScriptablePluginEngineBootstrapper? {
            return scriptEngines.getOrDefault(language, null)
        }

        @JvmStatic
        fun getAllScriptEngines(): Array<ScriptablePluginEngineBootstrapper> {
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