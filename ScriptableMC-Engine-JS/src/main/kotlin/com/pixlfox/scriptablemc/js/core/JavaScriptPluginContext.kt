package com.pixlfox.scriptablemc.js.core

import com.pixlfox.scriptablemc.core.ScriptablePluginContext
import com.pixlfox.scriptablemc.core.ScriptablePluginEngine
import com.pixlfox.scriptablemc.core.ScriptablePluginLogger
import com.pixlfox.scriptablemc.core.ScriptablePluginScheduler
import org.bukkit.Material
import org.bukkit.event.HandlerList
import org.graalvm.polyglot.Value


@Suppress("MemberVisibilityCanBePrivate", "unused")
class JavaScriptPluginContext(override val engine: ScriptablePluginEngine, override val pluginName: String, override val pluginPriority: Int, override val pluginIcon: Material, override val pluginInstance: Value) : ScriptablePluginContext() {
    override val pluginVersion = engine.pluginVersion
    override val logger = ScriptablePluginLogger(this)
    override val scheduler = ScriptablePluginScheduler(this)

    override fun load() {
        if(engine.debugEnabled) {
            engine.bootstrapper.logger.info("[$pluginName] Loading JavaScript plugin context.")
        }

        if(pluginInstance.hasMember("onLoad")) {
            if(pluginInstance.canInvokeMember("onLoad")) {
                pluginInstance.invokeMember("onLoad")
            } else {
                engine.bootstrapper.logger.warning("$pluginName::onLoad is not a method.")
            }
        }
    }

    override fun enable() {
        if(engine.debugEnabled) {
            engine.bootstrapper.logger.info("[$pluginName] Enabling JavaScript plugin context.")
        }

        if(pluginInstance.hasMember("onEnable")) {
            if(pluginInstance.canInvokeMember("onEnable")) {
                pluginInstance.invokeMember("onEnable")
            } else {
                engine.bootstrapper.logger.warning("$pluginName::onEnable is not a method.")
            }
        }

        isEnabled = true
    }

    override fun disable() {
        if(engine.debugEnabled) {
            engine.bootstrapper.logger.info("[$pluginName] Disabling JavaScript plugin context.")
        }

        if(pluginInstance.hasMember("onDisable")) {
            if(pluginInstance.canInvokeMember("onDisable")) {
                pluginInstance.invokeMember("onDisable")
            } else {
                engine.bootstrapper.logger.warning("$pluginName::onDisable is not a method.")
            }
        }

        HandlerList.unregisterAll(this)

        val commands = commands.toTypedArray()
        for(command in commands) {
            unregisterCommand(command)
        }
        isEnabled = false
    }

    override fun unload() {
        scheduler.cancelAllTasks()

        if(engine.debugEnabled) {
            engine.bootstrapper.logger.info("[$pluginName] Unloading JavaScript plugin context.")
        }

        if(pluginInstance.hasMember("onUnload")) {
            if(pluginInstance.canInvokeMember("onUnload")) {
                pluginInstance.invokeMember("onUnload")
            } else {
                engine.bootstrapper.logger.warning("$pluginName::onUnload is not a method.")
            }
        }
    }

    companion object {
        fun newInstance(pluginName: String, pluginPriority: Int, pluginIcon: Material, engine: ScriptablePluginEngine, pluginInstance: Value): ScriptablePluginContext {
            if(engine.debugEnabled) {
                engine.bootstrapper.logger.info("[$pluginName] Creating new JavaScript plugin context.")
            }

            return JavaScriptPluginContext(engine, pluginName, pluginPriority, pluginIcon, pluginInstance)
        }
    }
}