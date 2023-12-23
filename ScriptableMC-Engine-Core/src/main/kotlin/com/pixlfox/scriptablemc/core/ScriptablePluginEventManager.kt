package com.pixlfox.scriptablemc.core

import org.bukkit.Bukkit
import org.bukkit.event.Event
import org.bukkit.event.EventPriority
import org.bukkit.event.HandlerList
import org.bukkit.plugin.EventExecutor

@Suppress("unused", "MemberVisibilityCanBePrivate")
class ScriptablePluginEventManager(private val context: ScriptablePluginContext) {
    @JvmOverloads
    fun registerEvent(
        eventClass: Class<out Event>,
        executor: EventExecutor,
        priority: EventPriority = EventPriority.NORMAL,
        ignoreCancelled: Boolean = false
    ) {
        Bukkit.getServer().pluginManager.registerEvent(eventClass, context, priority, executor, context.javaPlugin, ignoreCancelled)
    }

    fun unregisterAllEvents() {
        HandlerList.unregisterAll(context.javaPlugin)
    }
}

