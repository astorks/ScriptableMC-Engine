package com.pixlfox.scriptablemc.core

import org.bukkit.Bukkit
import org.bukkit.command.CommandMap
import org.bukkit.command.PluginCommand
import org.bukkit.plugin.Plugin
import java.lang.reflect.InvocationTargetException
import java.util.HashMap

@Suppress("unused", "MemberVisibilityCanBePrivate")
class ScriptablePluginCommandManager(private val context: ScriptablePluginContext) {

    private val commands: MutableList<PluginCommand> = mutableListOf()

    fun newCommand(name: String): PluginCommand? {
        var command: PluginCommand? = null

        try {
            val c = PluginCommand::class.java.getDeclaredConstructor(String::class.java, Plugin::class.java)
            c.isAccessible = true

            command = c.newInstance(name, context.javaPlugin as Plugin)
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
        commandMap.register(context.pluginName.lowercase(), command)
        commands.add(command)
        bukkitCommandMap.isAccessible = false

        if(context.engine.debugEnabled) {
            context.engine.bootstrapper.logger.info("[${context.pluginName}] Registered command ${command.name}.")
        }
    }

    fun unregisterCommand(command: PluginCommand) {
        val commandMapField = Bukkit.getServer().javaClass.getDeclaredField("commandMap")
        commandMapField.isAccessible = true
        val commandMap = commandMapField.get(Bukkit.getServer()) as CommandMap

        var knownCommandsField = commandMap.javaClass.superclass.declaredFields.firstOrNull { it.name.equals("knownCommands", false) }

        if(knownCommandsField == null) { // Pre-MCv1.13 command unregister fix
            knownCommandsField = commandMap.javaClass.declaredFields.firstOrNull { it.name.equals("knownCommands", false) }
        }

        knownCommandsField?.isAccessible = true
        val knownCommands = knownCommandsField?.get(commandMap) as HashMap<*, *>?

        command.unregister(commandMap)

        knownCommands?.remove(command.name)
        commands.remove(command)

        commandMapField.isAccessible = false
        knownCommandsField?.isAccessible = false

        if(context.engine.debugEnabled) {
            context.engine.bootstrapper.logger.info("[${context.pluginName}] Unregistered command ${command.name}.")
        }
    }

    fun unregisterAllCommands(): Int {
        val commands = commands.toTypedArray()
        for(command in commands) {
            unregisterCommand(command)
        }
        return commands.size
    }
}