package com.pixlfox.scriptablemc

import co.aikar.commands.PaperCommandManager
import com.pixlfox.scriptablemc.core.ScriptablePluginEngine
import org.bukkit.event.Listener
import org.bukkit.plugin.java.JavaPlugin


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
        commandManager?.registerCommand(ScriptablePluginJsCommand(this))

        patchClassLoader {
            saveDefaultConfig()

            try {
                scriptEngine = ScriptablePluginEngine(this, config.getString("root_scripts_folder", "./scripts").orEmpty(), config.getBoolean("debug", false))
                scriptEngine!!.start()
                logger.info("Scriptable plugin engine started.")
            } catch (e: IllegalStateException) {
                if (e.message?.contains("Make sure the truffle-api.jar is on the classpath.", true) == true) {
                    logger.warning("Scriptable plugin engine failed to start.")
                    e.printStackTrace()
                    logger.severe("It looks like you're trying to run this server with the standard java runtime. ScriptableMC only works with the GraalVM java runtime.")
                } else {
                    logger.warning("Scriptable plugin engine failed to start.")
                    e.printStackTrace()
                }
            } catch (e: Exception) {
                logger.warning("Scriptable plugin engine failed to start.")
                e.printStackTrace()
            }
        }
    }

    override fun onDisable() {
        patchClassLoader {
            try {
                scriptEngine!!.close()
                logger.info("Scriptable plugin engine shutdown.")
            } catch (e: Exception) {
                logger.warning("Scriptable plugin engine failed to shutdown.")
                e.printStackTrace()
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