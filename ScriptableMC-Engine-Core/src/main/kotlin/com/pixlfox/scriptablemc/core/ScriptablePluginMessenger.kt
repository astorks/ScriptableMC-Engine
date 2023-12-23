package com.pixlfox.scriptablemc.core

import org.bukkit.Bukkit
import org.bukkit.plugin.messaging.PluginMessageListener
import org.bukkit.plugin.messaging.PluginMessageListenerRegistration

@Suppress("unused", "MemberVisibilityCanBePrivate")
class ScriptablePluginMessenger(private val context: ScriptablePluginContext) {
    private val messenger = Bukkit.getMessenger()

    fun registerIncomingPluginChannel(channelName: String, listener: PluginMessageListener): PluginMessageListenerRegistration {
        return messenger.registerIncomingPluginChannel(context.javaPlugin, channelName, listener)
    }

    fun unregisterIncomingPluginChannel(channel: String) {
        messenger.unregisterIncomingPluginChannel(context.javaPlugin, channel)
    }

    fun registerOutgoingPluginChannel(channel: String) {
        messenger.registerOutgoingPluginChannel(context.javaPlugin, channel)
    }

    fun unregisterOutgoingPluginChannel(channel: String) {
        messenger.unregisterOutgoingPluginChannel(context.javaPlugin, channel)
    }
}