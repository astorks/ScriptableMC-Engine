package com.pixlfox.scriptablemc.core

import com.pixlfox.scriptablemc.SMCJavaScriptConfig
import com.pixlfox.scriptablemc.ScriptEngineMain
import com.smc.exceptions.ScriptNotFoundException
import com.pixlfox.scriptablemc.utils.UnzipUtility
import fr.minuskube.inv.InventoryManager
import org.bukkit.Material
import org.graalvm.polyglot.*
import java.io.File

@Suppress("MemberVisibilityCanBePrivate", "unused")
class JavaScriptPluginEngine(override val bootstrapPlugin: ScriptEngineMain, override val config: SMCJavaScriptConfig): ScriptablePluginEngine() {

    override val languageName: String = "js"
    override val languageFileExtension: String = "js"
    override val debugEnabled: Boolean = config.debug
    override val graalContext: Context
    override val globalBindings: Value
    override val scriptablePlugins: MutableList<ScriptablePluginContext> = mutableListOf()
    override val inventoryManager: InventoryManager = InventoryManager(bootstrapPlugin)

    init {
        if(config.extractLibs) {
            val librariesResource = bootstrapPlugin.getResource("libraries.zip")
            val libFolder = File("${config.rootScriptsFolder}/lib")
            if (librariesResource != null && !libFolder.exists()) {
                if(debugEnabled) {
                    bootstrapPlugin.logger.info("Extracting javascript libraries from ScriptableMC-Engine-JS resources to ${libFolder.path}...")
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
            .allowCreateThread(true)
            .option("js.ecmascript-version", "2020")

        if(config.commonJsModulesEnabled) {
            if(config.debug) {
                bootstrapPlugin.logger.info("Enabling CommonJS support...")
            }

            if (!File(config.commonJsModulesPath).exists()) {
                if(config.debug) {
                    bootstrapPlugin.logger.info("CommonJS creating modules folder: ${config.commonJsModulesPath}")
                }
                File(config.commonJsModulesPath).mkdirs()
            }
            else {
                if(config.debug) {
                    bootstrapPlugin.logger.info("CommonJS using modules folder: ${config.commonJsModulesPath}")
                }
            }

            contextBuilder = contextBuilder
                .option("js.commonjs-require", "true")
                .option("js.commonjs-require-cwd", config.commonJsModulesPath)

            if (File(File(config.commonJsModulesPath), config.commonJsGlobalsFile).exists()) {
                if(config.debug) {
                    bootstrapPlugin.logger.info("CommonJS using globals: ${File(File(config.commonJsModulesPath), config.commonJsGlobalsFile).path}")
                }
                contextBuilder = contextBuilder
                    .option("js.commonjs-global-properties", config.commonJsGlobalsFile)
            }
            else {
                if(config.debug) {
                    bootstrapPlugin.logger.warning("CommonJS unable to read globals: ${File(File(config.commonJsModulesPath), config.commonJsGlobalsFile).path}")
                }
            }

            bootstrapPlugin.logger.info("CommonJS support enabled.")
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
        if(pluginInstance.hasMember("pluginIcon")) {
            try {
                pluginIcon = pluginInstance.getMember("pluginIcon").`as`(Material::class.java)
            }
            catch(e: Exception) {
                e.printStackTrace()
            }
        }
        val pluginContext = JavaScriptPluginContext.newInstance(pluginName, pluginIcon, this, pluginInstance)
        pluginInstance.putMember("context", pluginContext)
        scriptablePlugins.add(pluginContext)
        pluginContext.load()
        return pluginContext
    }

    companion object {
        var instance: JavaScriptPluginEngine? = null
            private set
    }
}