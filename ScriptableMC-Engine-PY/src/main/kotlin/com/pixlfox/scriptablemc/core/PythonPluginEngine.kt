package com.pixlfox.scriptablemc.core

import com.pixlfox.scriptablemc.SMCPythonConfig
import com.pixlfox.scriptablemc.ScriptEngineMain
import com.pixlfox.scriptablemc.utils.UnzipUtility
import fr.minuskube.inv.InventoryManager
import org.graalvm.polyglot.*
import java.io.File

@Suppress("MemberVisibilityCanBePrivate", "unused")
class PythonPluginEngine(override val bootstrapPlugin: ScriptEngineMain, override val config: SMCPythonConfig): ScriptablePluginEngine() {
    override val languageName: String = "python"
    override val languageFileExtension: String = "py"
    override val graalContext: Context
    override val debugEnabled: Boolean = config.debug
    override val globalBindings: Value
    override val scriptablePlugins: MutableList<ScriptablePluginContext> = mutableListOf()
    override val inventoryManager: InventoryManager = InventoryManager(bootstrapPlugin)

    init {
        if(config.extractLibs) {
            val librariesResource = bootstrapPlugin.getResource("lib-py.zip")
            val libFolder = File("${config.rootScriptsFolder}/lib-py")
            if (librariesResource != null && !libFolder.exists()) {
                if(debugEnabled) {
                    bootstrapPlugin.logger.info("Extracting python libraries from ScriptableMC-Engine-PY resources to ${libFolder.path}...")
                }
                UnzipUtility.unzip(librariesResource, libFolder)
            }
        }

        var contextBuilder = Context
            .newBuilder(languageName)
            .allowAllAccess(true)
            .allowExperimentalOptions(true)
            .allowHostAccess(HostAccess.ALL)
            .allowHostClassLoading(true)
            .allowIO(true)
            .option("python.CoreHome", "${config.rootScriptsFolder}/lib-py/lib-graalpython/")
            .option("python.StdLibHome", "${config.rootScriptsFolder}/lib-py/lib-python/3/")

        if(config.debugger.enabled) {
            contextBuilder = contextBuilder
                .option("inspect", config.debugger.address)
                .option("inspect.Path", "smc-engine-py")
                .option("inspect.Suspend", "false")
                .option("inspect.Secure", "false")
                .option("inspect.WaitAttached", "${config.debugger.waitAttached}")
        }

        graalContext = contextBuilder.build()
        globalBindings = graalContext.getBindings(languageName)
    }


    override fun start() {
        instance = this
        super.start()
    }

    override fun close() {
        instance = null
        super.close()
    }

    override fun loadPlugin(scriptableClass: Value): ScriptablePluginContext {
        val pluginInstance = scriptableClass.newInstance()
        val pluginName = pluginInstance.getMember("pluginName").asString()
        val pluginContext = PythonPluginContext.newInstance(pluginName, this, pluginInstance)
        pluginInstance.putMember("context", pluginContext)
        scriptablePlugins.add(pluginContext)
        pluginContext.load()
        return pluginContext
    }

    companion object {
        var instance: PythonPluginEngine? = null
            private set
    }
}