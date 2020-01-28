package com.pixlfox.scriptablemc.core

import com.pixlfox.scriptablemc.smartinvs.SmartInventoryInterface
import com.pixlfox.scriptablemc.smartinvs.SmartItemBuilder
import com.pixlfox.scriptablemc.utils.File
import me.clip.placeholderapi.PlaceholderAPI
import org.bukkit.Bukkit
import org.bukkit.OfflinePlayer
import org.bukkit.Server
import org.bukkit.command.CommandMap
import org.bukkit.event.Event
import org.bukkit.event.EventPriority
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import java.util.HashMap
import java.lang.reflect.InvocationTargetException
import org.bukkit.command.PluginCommand
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.*
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.plugin.messaging.PluginMessageListener
import org.bukkit.plugin.messaging.PluginMessageListenerRegistration
import org.graalvm.polyglot.Value


@Suppress("MemberVisibilityCanBePrivate", "unused")
class ScriptablePluginContext(private val engine: ScriptablePluginEngine, val pluginName: String, val pluginInstance: Value): Listener {
    val server: Server
        get() = Bukkit.getServer()

    val javaPlugin: JavaPlugin
        get() = engine.bootstrapPlugin

    private val commands = mutableListOf<PluginCommand>()

    internal fun load() {
        if(engine.debugEnabled) {
            engine.bootstrapPlugin.logger.info("[$pluginName] Loading scriptable plugin context.")
        }

        pluginInstance.invokeMember("onLoad")
    }

    internal fun enable() {
        if(engine.debugEnabled) {
            engine.bootstrapPlugin.logger.info("[$pluginName] Enabling scriptable plugin context.")
        }

        pluginInstance.invokeMember("onEnable")
    }

    internal fun disable() {
        if(engine.debugEnabled) {
            engine.bootstrapPlugin.logger.info("[$pluginName] Disabling scriptable plugin context.")
        }

        pluginInstance.invokeMember("onDisable")

        HandlerList.unregisterAll(this)

        val commands = commands.toTypedArray()
        for(command in commands) {
            unregisterCommand(command)
        }
    }

    fun registerEvent(eventClass: Class<out Event>, executor: EventExecutor) {
        Bukkit.getServer().pluginManager.registerEvent(eventClass, this, EventPriority.NORMAL, executor, javaPlugin)
    }

    fun registerIncomingPluginChannel(channelName: String, listener: PluginMessageListener): PluginMessageListenerRegistration {
        return Bukkit.getMessenger().registerIncomingPluginChannel(javaPlugin, channelName, listener)
    }

    fun unregisterIncomingPluginChannel(channel: String) {
        Bukkit.getMessenger().unregisterIncomingPluginChannel(javaPlugin, channel)
    }

    fun registerOutgoingPluginChannel(channel: String) {
        Bukkit.getMessenger().registerOutgoingPluginChannel(javaPlugin, channel)
    }

    fun unregisterOutgoingPluginChannel(channel: String) {
        Bukkit.getMessenger().unregisterOutgoingPluginChannel(javaPlugin, channel)
    }

    fun newCommand(name: String): PluginCommand? {
        var command: PluginCommand? = null

        try {
            val c = PluginCommand::class.java.getDeclaredConstructor(String::class.java, Plugin::class.java)
            c.isAccessible = true

            command = c.newInstance(name, javaPlugin as Plugin)
        } catch (e: SecurityException) {
            e.printStackTrace()
        } catch (e: IllegalArgumentException) {
            e.printStackTrace()
        } catch (e: IllegalAccessException) {
            e.printStackTrace()
        } catch (e: InstantiationException) {
            e.printStackTrace()
        } catch (e: InvocationTargetException) {
            e.printStackTrace()
        } catch (e: NoSuchMethodException) {
            e.printStackTrace()
        }

        return command
    }

    fun registerCommand(command: PluginCommand) {
        val bukkitCommandMap = Bukkit.getServer().javaClass.getDeclaredField("commandMap")
        bukkitCommandMap.isAccessible = true
        val commandMap = bukkitCommandMap.get(Bukkit.getServer()) as CommandMap
        commandMap.register(this.pluginName.toLowerCase(), command)
        commands.add(command)
        bukkitCommandMap.isAccessible = false
    }

    fun unregisterCommand(command: PluginCommand) {
        val commandMapField = Bukkit.getServer().javaClass.getDeclaredField("commandMap")
        commandMapField.isAccessible = true
        val commandMap = commandMapField.get(Bukkit.getServer()) as CommandMap

        val knownCommandsField = commandMap.javaClass.superclass.getDeclaredField("knownCommands")
        knownCommandsField.isAccessible = true
        val knownCommands = knownCommandsField.get(commandMap) as HashMap<*, *>

        command.unregister(commandMap)

        knownCommands.remove(command.name)
        commands.remove(command)

        commandMapField.isAccessible = false
        knownCommandsField.isAccessible = false
    }

    fun getFile(pathName: String): File {
        return File(pathName)
    }

    fun smartInventory(): SmartInventoryInterface {
        return SmartInventoryInterface()
    }

    fun itemBuilder(itemStack: ItemStack): SmartItemBuilder {
        return SmartItemBuilder(itemStack)
    }

    fun setPlaceholders(player: Player, placeholderText: String): String {
        if(Bukkit.getPluginManager().getPlugin("PlaceholderAPI") != null) {
            return PlaceholderAPI.setPlaceholders(player, placeholderText)
        }

        engine.bootstrapPlugin.logger.warning("[$pluginName] Placeholder API is missing.")
        return placeholderText
    }

    fun setPlaceholders(player: OfflinePlayer, placeholderText: String): String {
        if(Bukkit.getPluginManager().getPlugin("PlaceholderAPI") != null) {
            return PlaceholderAPI.setPlaceholders(player, placeholderText)
        }

        engine.bootstrapPlugin.logger.warning("[$pluginName] Placeholder API is missing.")
        return placeholderText
    }

    companion object {
        fun newInstance(pluginName: String, engine: ScriptablePluginEngine, pluginInstance: Value): ScriptablePluginContext {
            if(engine.debugEnabled) {
                engine.bootstrapPlugin.logger.info("[$pluginName] Creating new scriptable plugin context.")
            }

            return ScriptablePluginContext(engine, pluginName, pluginInstance)
        }
    }
}