package com.pixlfox.scriptablemc.js.core

import com.pixlfox.scriptablemc.core.ScriptablePluginContext
import com.pixlfox.scriptablemc.core.ScriptablePluginEngine
import com.smc.version.Version
import org.bukkit.Material
import org.bukkit.event.HandlerList
import org.graalvm.polyglot.Value


@Suppress("MemberVisibilityCanBePrivate", "unused")
class JavaScriptPluginContext(override val engine: ScriptablePluginEngine, override val pluginName: String, override val pluginIcon: Material, override val pluginInstance: Value) : ScriptablePluginContext() {
    override val pluginVersion: Version
        get() = engine.pluginVersion

    override fun load() {
        if(engine.debugEnabled) {
            engine.bootstrapper.logger.info("[$pluginName] Loading JavaScript plugin context.")
        }

        pluginInstance.invokeMember("onLoad")
    }

    override fun enable() {
        if(engine.debugEnabled) {
            engine.bootstrapper.logger.info("[$pluginName] Enabling JavaScript plugin context.")
        }

        pluginInstance.invokeMember("onEnable")
        isEnabled = true
    }

    override fun disable() {
        if(engine.debugEnabled) {
            engine.bootstrapper.logger.info("[$pluginName] Disabling JavaScript plugin context.")
        }

        pluginInstance.invokeMember("onDisable")

        HandlerList.unregisterAll(this)

        val commands = commands.toTypedArray()
        for(command in commands) {
            unregisterCommand(command)
        }
        isEnabled = false
    }

    companion object {
        fun newInstance(pluginName: String, pluginIcon: Material, engine: ScriptablePluginEngine, pluginInstance: Value): ScriptablePluginContext {
            if(engine.debugEnabled) {
                engine.bootstrapper.logger.info("[$pluginName] Creating new JavaScript plugin context.")
            }

            return JavaScriptPluginContext(engine, pluginName, pluginIcon, pluginInstance)
        }
    }
}