package com.pixlfox.scriptablemc.js.core

import com.pixlfox.scriptablemc.ScriptablePluginEngineBootstrapper
import com.pixlfox.scriptablemc.core.ScriptablePluginContext
import com.pixlfox.scriptablemc.core.ScriptablePluginEngine
import com.pixlfox.scriptablemc.js.JavaScriptPluginEngineConfig
import com.pixlfox.scriptablemc.utils.UnzipUtility
import org.bukkit.Material
import org.graalvm.polyglot.*
import org.graalvm.polyglot.io.IOAccess
import java.io.File


@Suppress("MemberVisibilityCanBePrivate", "unused")
class JavaScriptPluginEngine(override val bootstrapper: ScriptablePluginEngineBootstrapper, override val config: JavaScriptPluginEngineConfig): ScriptablePluginEngine() {

    override val languageName: String = "js"
    override val languageFileExtension: String = "js"
    override val debugEnabled: Boolean = config.debug
    override val graalContext: Context
    override val globalBindings: Value
    override val scriptablePlugins: MutableList<ScriptablePluginContext> = mutableListOf()

    init {
        if(config.extractLibs) {
            val librariesResource = bootstrapper.getResource("libraries.zip")
            val libFolder = File("${config.rootScriptsFolder}/lib")
            if (librariesResource != null && !libFolder.exists()) {
                if(debugEnabled) {
                    bootstrapper.logger.info("Extracting javascript libraries from ScriptableMC-Engine-JS resources to ${libFolder.path}...")
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
            .allowIO(IOAccess.ALL)
            .allowCreateThread(true)
            .option("js.ecmascript-version", "latest")
            .option("engine.WarnInterpreterOnly", "false")
            .option("log.file", "logs/script-engine.log")
            .option("js.esm-eval-returns-exports", "true")

        if(config.commonJsModulesEnabled) {
            if(config.debug) {
                bootstrapper.logger.info("Enabling CommonJS support...")
            }

            if (!File(config.commonJsModulesPath).exists()) {
                if(config.debug) {
                    bootstrapper.logger.info("CommonJS creating modules folder: ${config.commonJsModulesPath}")
                }
                File(config.commonJsModulesPath).mkdirs()
            }
            else {
                if(config.debug) {
                    bootstrapper.logger.info("CommonJS using modules folder: ${config.commonJsModulesPath}")
                }
            }

            contextBuilder = contextBuilder
                .option("js.commonjs-require", "true")
                .option("js.commonjs-require-cwd", config.commonJsModulesPath)

            if (File(File(config.commonJsModulesPath), config.commonJsGlobalsFile).exists()) {
                if(config.debug) {
                    bootstrapper.logger.info("CommonJS using globals: ${File(File(config.commonJsModulesPath), config.commonJsGlobalsFile).path}")
                }
                contextBuilder = contextBuilder
                    .option("js.commonjs-global-properties", config.commonJsGlobalsFile)
            }
            else {
                if(config.debug) {
                    bootstrapper.logger.warning("CommonJS unable to read globals: ${File(File(config.commonJsModulesPath), config.commonJsGlobalsFile).path}")
                }
            }

            bootstrapper.logger.info("CommonJS support enabled.")
        }

        if(config.debugger.enabled) {
            contextBuilder = contextBuilder
                .option("inspect", config.debugger.address)
                .option("inspect.Path", "smc-engine-js")
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
        var pluginIcon = Material.STONE
        var pluginPriority = 0
        if(pluginInstance.hasMember("icon")) {
            try {
                pluginIcon = pluginInstance.getMember("icon").`as`(Material::class.java)
            }
            catch(_: Exception) { }
        }
        if(pluginInstance.hasMember("priority")) {
            try {
                pluginPriority = pluginInstance.getMember("priority").asInt()
            }
            catch(_: Exception) { }
        }
        val pluginContext = JavaScriptPluginContext.newInstance(pluginName, pluginPriority, pluginIcon, this, pluginInstance)
        pluginInstance.putMember("context", pluginContext)
        scriptablePlugins.add(pluginContext)
        pluginContext.load()
        return pluginContext
    }

    override fun unloadPlugin(pluginContext: ScriptablePluginContext) {
        if(pluginContext.isEnabled) {
            pluginContext.disable()
        }

        pluginContext.unload()
        scriptablePlugins.remove(pluginContext)
    }

    companion object {
        var instance: JavaScriptPluginEngine? = null
            private set
    }
}