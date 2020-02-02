package com.pixlfox.scriptablemc.core

import com.pixlfox.scriptablemc.utils.UnzipUtility
import fr.minuskube.inv.InventoryManager
import org.bukkit.Bukkit
import org.bukkit.command.CommandSender
import org.bukkit.event.Listener
import org.graalvm.polyglot.*
import java.io.File
import org.bukkit.plugin.java.JavaPlugin
import java.util.*


@Suppress("MemberVisibilityCanBePrivate", "unused")
class ScriptablePluginEngine(val bootstrapPlugin: JavaPlugin, val rootScriptsFolder: String = "./scripts", val debugEnabled: Boolean = false, val extractLibs: Boolean = true): Listener {
    private val graalContext: Context = Context
        .newBuilder()
        .allowAllAccess(true)
        .allowExperimentalOptions(true)
        .allowHostAccess(HostAccess.ALL)
        .allowHostClassLoading(true)
        .allowIO(true)
        .option("js.ecmascript-version", "2020")
        .build()
    private val jsBindings: Value = graalContext.getBindings("js")
    internal val scriptablePlugins: MutableList<ScriptablePluginContext> = mutableListOf()
    internal val inventoryManager: InventoryManager = InventoryManager(bootstrapPlugin)

    internal fun start() {
        instance = this
        inventoryManager.init()
        jsBindings.putMember("engine", this)

        val mainScriptFile = File("${rootScriptsFolder}/main.js")
        if(!mainScriptFile.parentFile.exists()) {
            mainScriptFile.parentFile.mkdirs()
        }

        if(extractLibs) {
            val librariesResource = bootstrapPlugin.getResource("libraries.zip")
            if (librariesResource != null) {
                val unzipUtil = UnzipUtility()
                unzipUtil.unzip(librariesResource, "${rootScriptsFolder}/lib")
            }
        }

        if(mainScriptFile.exists()) {
            eval(
                Source.newBuilder("js", mainScriptFile)
                    .name("main.js")
                    .mimeType("application/javascript+module")
                    .interactive(false)
                    .build()
            )
        }
        else {
            throw ScriptNotFoundException(mainScriptFile)
        }
    }

    internal fun close() {
        instance = null
        for(scriptablePlugin in scriptablePlugins) {
            scriptablePlugin.disable()
        }
        scriptablePlugins.clear()

        graalContext.close(true)
    }

    fun evalFile(filePath: String): Value {
        val scriptFile = File("${rootScriptsFolder}/$filePath")

        return if(scriptFile.exists()) {
            eval(
                Source.newBuilder("js", scriptFile)
                    .name(scriptFile.name)
                    .mimeType("application/javascript+module")
                    .interactive(false)
                    .build()
            )
        } else {
            throw ScriptNotFoundException(scriptFile)
        }
    }

    fun evalFile(scriptFile: File): Value {
        return if(scriptFile.exists()) {
            eval(
                Source.newBuilder("js", scriptFile)
                    .name(scriptFile.name)
                    .mimeType("application/javascript+module")
                    .interactive(false)
                    .build()
            )
        } else {
            throw ScriptNotFoundException(scriptFile)
        }
    }

    fun evalJs(source: String): Value {
        return graalContext.eval(
            Source.newBuilder("js", source,"${UUID.randomUUID()}.js")
                .mimeType("application/javascript+module")
                .interactive(false)
                .cached(false)
                .build()
        )
    }

    fun evalCommandSenderJs(source: String, sender: CommandSender): Value {
        val tempScriptFile = File("${rootScriptsFolder}/${UUID.randomUUID()}.js")
        tempScriptFile.writeText("import * as lib from './lib/global.js';\n" +
                "new (class EvalCommandSenderContext {\n" +
                "    run(sender, server, servicesManager) {\n" +
                "        $source\n" +
                "    }\n" +
                "})()\n");
        val evalCommandSenderContext = evalFile(tempScriptFile)
        tempScriptFile.delete()
        evalCommandSenderContext.putMember("sender", sender)
        evalCommandSenderContext.putMember("server", Bukkit.getServer())
        evalCommandSenderContext.putMember("servicesManager", Bukkit.getServicesManager())
        return evalCommandSenderContext.invokeMember("run", sender, Bukkit.getServer(), Bukkit.getServicesManager());
    }

    fun eval(source: Source): Value {
        return graalContext.eval(source)
    }

    fun loadPlugin(scriptableClass: Value): ScriptablePluginContext {
        val pluginInstance = scriptableClass.newInstance()
        val pluginName = pluginInstance.getMember("pluginName").asString()
        val pluginContext = ScriptablePluginContext.newInstance(pluginName, this, pluginInstance)
        pluginInstance.putMember("context", pluginContext)
        scriptablePlugins.add(pluginContext)
        pluginContext.load()
        return pluginContext
    }

    fun enableAllPlugins() {
        for (pluginContext in scriptablePlugins) {
            pluginContext.enable()
        }
    }

    fun enablePlugin(pluginContext: ScriptablePluginContext) {
        pluginContext.enable()
    }

    fun disablePlugin(pluginContext: ScriptablePluginContext) {
        pluginContext.disable()
    }

    companion object {
        private var inst: ScriptablePluginEngine? = null
        var instance: ScriptablePluginEngine?
            internal set(value) { inst = value }
            get() { return inst }
    }
}

class ScriptNotFoundException(scriptFile: File) : Exception("Unable to load script: ${scriptFile.path}.")