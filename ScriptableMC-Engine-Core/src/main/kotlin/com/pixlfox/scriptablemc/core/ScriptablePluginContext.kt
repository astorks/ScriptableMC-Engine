package com.pixlfox.scriptablemc.core

import com.smc.version.Version
import me.clip.placeholderapi.PlaceholderAPI
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.OfflinePlayer
import org.bukkit.Server
import org.bukkit.event.Event
import org.bukkit.event.Listener
import org.bukkit.command.PluginCommand
import org.bukkit.entity.Player
import org.bukkit.plugin.*
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.plugin.messaging.PluginMessageListener
import org.bukkit.plugin.messaging.PluginMessageListenerRegistration
import org.graalvm.polyglot.Value


@Suppress("MemberVisibilityCanBePrivate", "unused")
abstract class ScriptablePluginContext: Listener {
    abstract val engine: ScriptablePluginEngine
    abstract val pluginName: String
    abstract val pluginInstance: Value
    open val pluginIcon: Material = Material.STONE
    open val pluginPriority: Int = 0

    lateinit var logger: ScriptablePluginLogger
        internal set

    lateinit var scheduler: ScriptablePluginScheduler
        internal set

    lateinit var commandManager: ScriptablePluginCommandManager
        internal set

    lateinit var eventManager: ScriptablePluginEventManager
        internal set

    lateinit var messenger: ScriptablePluginMessenger
        internal set

    var isEnabled: Boolean = false
        internal set

    val server: Server
        get() = Bukkit.getServer()

    val pluginVersion: Version
        get() = engine.pluginVersion

    val javaPlugin: JavaPlugin
        get() = engine.bootstrapper

    val servicesManager: ServicesManager
        get() = Bukkit.getServicesManager()

    open fun load() {
        logger = ScriptablePluginLogger(this)
        eventManager = ScriptablePluginEventManager(this)
        scheduler = ScriptablePluginScheduler(this)
        commandManager = ScriptablePluginCommandManager(this)
        messenger = ScriptablePluginMessenger(this)

        if(engine.debugEnabled) {
            logger.info("Loading scriptable plugin context.")
        }

        if(pluginInstance.hasMember("onLoad")) {
            if(pluginInstance.canInvokeMember("onLoad")) {
                pluginInstance.invokeMember("onLoad")
            } else {
                logger.warning("onLoad method is not invokable.")
            }
        }
    }

    open fun enable() {
        if(engine.debugEnabled) {
            logger.info("Enabling scriptable plugin context.")
        }

        if(pluginInstance.hasMember("onEnable")) {
            if(pluginInstance.canInvokeMember("onEnable")) {
                pluginInstance.invokeMember("onEnable")
            } else {
                logger.warning("onEnable method is not invokable.")
            }
        }

        isEnabled = true
    }

    open fun disable() {
        if(engine.debugEnabled) {
            logger.info("Disabling scriptable plugin context.")
        }

        if(pluginInstance.hasMember("onDisable")) {
            if(pluginInstance.canInvokeMember("onDisable")) {
                pluginInstance.invokeMember("onDisable")
            } else {
                logger.warning("onDisable method is not invokable.")
            }
        }

        isEnabled = false
    }

    open fun unload() {
        scheduler.cancelAllTasks()
        commandManager.unregisterAllCommands()
        eventManager.unregisterAllEvents()

        if(engine.debugEnabled) {
            logger.info("Unloading scriptable plugin context.")
        }

        if(pluginInstance.hasMember("onUnload")) {
            if(pluginInstance.canInvokeMember("onUnload")) {
                pluginInstance.invokeMember("onUnload")
            } else {
                logger.warning("onUnload method is not invokable.")
            }
        }
    }

    fun getBukkitServiceRegistration(className: String): Any? {
        val serviceClass = servicesManager.knownServices.firstOrNull { e -> e.name == className }

        if(serviceClass != null) {
            return getBukkitServiceRegistration(serviceClass)
        }

        return null
    }

    fun getBukkitServiceRegistration(_class: Class<*>): Any? {
        return servicesManager.getRegistration(_class)
    }

    // <editor-fold desc="Deprecated">
    @Deprecated("use getEventManager().registerEvent(eventClass, executor)", ReplaceWith("eventManager.registerEvent(eventClass, executor)"))
    fun registerEvent(eventClass: Class<out Event>, executor: EventExecutor) {
        eventManager.registerEvent(eventClass, executor)
    }

    @Deprecated("use getMessenger().registerIncomingPluginChannel(channelName, listener)", ReplaceWith("messenger.registerIncomingPluginChannel(channelName, listener)"))
    fun registerIncomingPluginChannel(channelName: String, listener: PluginMessageListener): PluginMessageListenerRegistration {
        return messenger.registerIncomingPluginChannel(channelName, listener)
    }

    @Deprecated("use getMessenger().unregisterIncomingPluginChannel(channel)", ReplaceWith("messenger.unregisterIncomingPluginChannel(channel)"))
    fun unregisterIncomingPluginChannel(channel: String) {
        messenger.unregisterIncomingPluginChannel(channel)
    }

    @Deprecated("use getMessenger().registerOutgoingPluginChannel(channel)", ReplaceWith("messenger.registerOutgoingPluginChannel(channel)"))
    fun registerOutgoingPluginChannel(channel: String) {
        messenger.registerOutgoingPluginChannel(channel)
    }

    @Deprecated("use getMessenger().unregisterOutgoingPluginChannel(channel)", ReplaceWith("messenger.unregisterOutgoingPluginChannel(channel)"))
    fun unregisterOutgoingPluginChannel(channel: String) {
        messenger.unregisterOutgoingPluginChannel(channel)
    }

    @Deprecated("use getCommandManager().newCommand(name)", ReplaceWith("commandManager.newCommand(name)"))
    fun newCommand(name: String): PluginCommand? {
        return commandManager.newCommand(name)
    }

    @Deprecated("use getCommandManager().registerCommand(command)", ReplaceWith("commandManager.registerCommand(command)"))
    fun registerCommand(command: PluginCommand) {
        commandManager.registerCommand(command)
    }

    @Deprecated("use getCommandManager().unregisterCommand(command)", ReplaceWith("commandManager.unregisterCommand(command)"))
    fun unregisterCommand(command: PluginCommand) {
        return commandManager.unregisterCommand(command)
    }

    @Deprecated("use PlaceholderAPI.setPlaceholders(player, placeholderText)", ReplaceWith("PlaceholderAPI.setPlaceholders(player, placeholderText)"))
    fun setPlaceholders(player: Player, placeholderText: String): String {
        if(Bukkit.getPluginManager().getPlugin("PlaceholderAPI") != null) {
            return PlaceholderAPI.setPlaceholders(player, placeholderText)
        }

        engine.bootstrapper.logger.warning("[$pluginName] Placeholder API is missing.")
        return placeholderText
    }

    @Deprecated("use PlaceholderAPI.setPlaceholders(player, placeholderText)", ReplaceWith("PlaceholderAPI.setPlaceholders(player, placeholderText)"))
    fun setPlaceholders(player: OfflinePlayer, placeholderText: String): String {
        if(Bukkit.getPluginManager().getPlugin("PlaceholderAPI") != null) {
            return PlaceholderAPI.setPlaceholders(player, placeholderText)
        }

        engine.bootstrapper.logger.warning("[$pluginName] Placeholder API is missing.")
        return placeholderText
    }
    //</editor-fold>
}