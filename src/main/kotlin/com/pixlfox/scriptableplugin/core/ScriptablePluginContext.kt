package com.pixlfox.scriptableplugin.core

import com.pixlfox.scriptableplugin.File
import com.pixlfox.scriptableplugin.smartinvs.SmartInventoryInterface
import com.pixlfox.scriptableplugin.smartinvs.SmartItemBuilder
//import com.pixlfox.scriptableplugin.smartinvs.SmartInventoryInterface
//import com.pixlfox.scriptableplugin.smartinvs.SmartInventoryProvider
//import com.pixlfox.scriptableplugin.smartinvs.SmartItemBuilder
//import fr.minuskube.inv.SmartInventory
import io.github.jorelali.commandapi.api.CommandAPI
import io.github.jorelali.commandapi.api.arguments.Argument
import org.bukkit.Bukkit
import org.bukkit.Server
import org.bukkit.command.CommandMap
import org.bukkit.event.Event
import org.bukkit.event.EventPriority
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.plugin.EventExecutor
import java.util.HashMap
import java.lang.reflect.InvocationTargetException
import org.bukkit.command.PluginCommand
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.Plugin
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

    val commandApi: CommandAPI
        get() = CommandAPI.getInstance()

    private val commands = mutableListOf<PluginCommand>()
    private val incomingPluginMessageListeners = mutableListOf<PluginMessageListenerRegistration>()
    private val outgoingPluginMessageListeners = mutableListOf<String>()

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

        val incomingPluginMessageListeners = incomingPluginMessageListeners.toTypedArray()
        for(listener in incomingPluginMessageListeners) {
            unregisterIncomingPluginChannel(listener)
        }

        val outgoingPluginMessageListeners = outgoingPluginMessageListeners.toTypedArray()
        for(listener in outgoingPluginMessageListeners) {
            unregisterOutgoingPluginChannel(listener)
        }
    }

    fun registerEvent(eventClass: Class<out Event>, executor: EventExecutor) {
        Bukkit.getServer().pluginManager.registerEvent(eventClass, this, EventPriority.NORMAL, executor, engine.bootstrapPlugin)
    }

    fun registerIncomingPluginChannel(channelName: String, listener: PluginMessageListener): PluginMessageListenerRegistration {
        val messageListenerRegistration = Bukkit.getMessenger().registerIncomingPluginChannel(engine.bootstrapPlugin, channelName, listener)
        incomingPluginMessageListeners.add(messageListenerRegistration)
        return messageListenerRegistration
    }

    fun unregisterIncomingPluginChannel(messageListenerRegistration: PluginMessageListenerRegistration) {
        incomingPluginMessageListeners.remove(messageListenerRegistration)
        Bukkit.getMessenger().unregisterIncomingPluginChannel(engine.bootstrapPlugin, messageListenerRegistration.channel, messageListenerRegistration.listener)
    }

    fun registerOutgoingPluginChannel(channel: String) {
        Bukkit.getMessenger().registerOutgoingPluginChannel(engine.bootstrapPlugin, channel)
        outgoingPluginMessageListeners.add(channel)
    }

    fun unregisterOutgoingPluginChannel(channel: String) {
        Bukkit.getMessenger().unregisterOutgoingPluginChannel(engine.bootstrapPlugin, channel)
        outgoingPluginMessageListeners.remove(channel)
    }

    fun newCommand(name: String): PluginCommand? {
        var command: PluginCommand? = null

        try {
            val c = PluginCommand::class.java.getDeclaredConstructor(String::class.java, Plugin::class.java)
            c.isAccessible = true

            command = c.newInstance(name, engine.bootstrapPlugin as Plugin)
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

    fun registerCommandApi(name: String, executor: io.github.jorelali.commandapi.api.CommandExecutor) {
        val canRegisterField = CommandAPI::class.java.getDeclaredField("canRegister")
        canRegisterField.isAccessible = true
        canRegisterField.setBoolean(null, true)

        commandApi.register(name, linkedMapOf<String, Argument>(), executor)

        canRegisterField.setBoolean(null, false)
        canRegisterField.isAccessible = false

        val fixPermissionsMethod = CommandAPI::class.java.getDeclaredMethod("fixPermissions")
        fixPermissionsMethod.isAccessible = true
        fixPermissionsMethod.invoke(null)
        fixPermissionsMethod.isAccessible = false
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

    companion object {
        fun newInstance(pluginName: String, engine: ScriptablePluginEngine, pluginInstance: Value): ScriptablePluginContext {
            if(engine.debugEnabled) {
                engine.bootstrapPlugin.logger.info("[$pluginName] Creating new scriptable plugin context.")
            }

            return ScriptablePluginContext(engine, pluginName, pluginInstance)
        }
    }
}

class OutgoingPluginChannelInterface(private val engine: ScriptablePluginEngine, val pluginName: String, val pluginInstance: Value) {

}