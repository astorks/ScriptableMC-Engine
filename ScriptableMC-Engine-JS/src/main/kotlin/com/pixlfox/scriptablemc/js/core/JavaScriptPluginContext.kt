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
    companion object {
        fun newInstance(pluginName: String, pluginPriority: Int, pluginIcon: Material, engine: ScriptablePluginEngine, pluginInstance: Value): ScriptablePluginContext {
            if(engine.debugEnabled) {
                engine.bootstrapper.logger.info("[$pluginName] Creating new JavaScript plugin context.")
            }

            return JavaScriptPluginContext(engine, pluginName, pluginPriority, pluginIcon, pluginInstance)
        }
    }
}