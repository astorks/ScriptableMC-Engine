package com.pixlfox.scriptablemc.core

import com.pixlfox.scriptablemc.SMCPythonConfig
import com.pixlfox.scriptablemc.ScriptEngineMain
import com.pixlfox.scriptablemc.exceptions.ScriptNotFoundException
import com.pixlfox.scriptablemc.utils.UnzipUtility
import fr.minuskube.inv.InventoryManager
import org.bukkit.command.CommandSender
import org.graalvm.polyglot.*
import java.io.File
import java.util.*

@Suppress("MemberVisibilityCanBePrivate", "unused")
class PythonPluginEngine(override val bootstrapPlugin: ScriptEngineMain, private val config: SMCPythonConfig): ScriptablePluginEngine() {
    override val graalContext: Context
    override val debugEnabled: Boolean = config.debug
    override val globalBindings: Value
    override val scriptablePlugins: MutableList<ScriptablePluginContext> = mutableListOf()
    override val inventoryManager: InventoryManager = InventoryManager(bootstrapPlugin)
    private var enabledAllPlugins: Boolean = false

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
            .newBuilder("python")
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
        globalBindings = graalContext.getBindings("python")
    }

    override fun start() {
        instance = this
        inventoryManager.init()
        globalBindings.putMember("engine", this)

        loadAllHelperClasses()

        val mainScriptFile = File("${config.rootScriptsFolder}/main.py")
        if(!mainScriptFile.parentFile.exists()) {
            mainScriptFile.parentFile.mkdirs()
        }

        if(mainScriptFile.exists()) {
            val mainReturn = eval(
                Source.newBuilder("python", mainScriptFile)
                    .name("main.py")
                    .interactive(false)
                    .build()
            )

            // Load all plugin types returned as an array
            if(mainReturn.hasArrayElements()) {
                for (i in 0 until mainReturn.arraySize) {
                    this.loadPlugin(mainReturn.getArrayElement(i))
                }

                // Enable all plugins if not already enabled
                if(!enabledAllPlugins) {
                    enableAllPlugins()
                }
            }
        }
        else {
            throw ScriptNotFoundException(mainScriptFile)
        }
    }

    override fun close() {
        instance = null
        for(scriptablePlugin in scriptablePlugins) {
            scriptablePlugin.disable()
        }
        scriptablePlugins.clear()

        graalContext.close(true)
    }

    override fun evalFile(filePath: String): Value {
        val scriptFile = File("${config.rootScriptsFolder}/$filePath")

        return if(scriptFile.exists()) {
            eval(
                Source.newBuilder("python", scriptFile)
                    .name(scriptFile.name)
                    .interactive(false)
                    .build()
            )
        } else {
            throw ScriptNotFoundException(scriptFile)
        }
    }

    override fun evalFile(scriptFile: File): Value {
        return if(scriptFile.exists()) {
            eval(
                Source.newBuilder("python", scriptFile)
                    .name(scriptFile.name)
                    .interactive(false)
                    .build()
            )
        } else {
            throw ScriptNotFoundException(scriptFile)
        }
    }

    override fun eval(source: String): Value {
        return graalContext.eval(
            Source.newBuilder("python", source,"${UUID.randomUUID()}.py")
                .interactive(false)
                .cached(false)
                .build()
        )
    }

    override fun evalCommandSender(source: String, sender: CommandSender): Value {
        val tempScriptFile = File("${config.rootScriptsFolder}/${UUID.randomUUID()}/__init__.py")
        try {
            tempScriptFile.parentFile.mkdirs()
            tempScriptFile.writeText(source)
            return evalFile(tempScriptFile)
        }
        finally {
            tempScriptFile.delete()
            tempScriptFile.parentFile.delete()
        }
    }

    override fun eval(source: Source): Value {
        return graalContext.eval(source)
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

    override fun enableAllPlugins() {
        for (pluginContext in scriptablePlugins) {
            pluginContext.enable()
        }
        enabledAllPlugins = true
    }

    override fun enablePlugin(pluginContext: ScriptablePluginContext) {
        pluginContext.enable()
    }

    override fun disablePlugin(pluginContext: ScriptablePluginContext) {
        pluginContext.disable()
    }

    companion object {
        private var inst: PythonPluginEngine? = null
        var instance: PythonPluginEngine?
            internal set(value) { inst = value }
            get() { return inst }
    }
}