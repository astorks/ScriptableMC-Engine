package com.smc.utils

import dev.jorel.commandapi.CommandAPICommand
import dev.jorel.commandapi.CommandPermission
import dev.jorel.commandapi.arguments.Argument
import dev.jorel.commandapi.executors.*

@Suppress("unused")
class MinecraftCommand(commandName: String) {
    private val apiCommand: CommandAPICommand = CommandAPICommand(commandName)
    private val arguments: LinkedHashMap<String, Argument> = linkedMapOf()

    fun executes(executor: CommandExecutor): MinecraftCommand  {
        apiCommand.executes(executor)
        return this
    }

    fun executesWithResult(executor: ResultingCommandExecutor): MinecraftCommand {
        apiCommand.executes(executor)
        return this
    }

    fun executesCommandBlock(executor: CommandBlockCommandExecutor): MinecraftCommand  {
        apiCommand.executesCommandBlock(executor)
        return this
    }

    fun executesCommandBlockWithResult(executor: CommandBlockResultingCommandExecutor): MinecraftCommand {
        apiCommand.executesCommandBlock(executor)
        return this
    }

    fun executesConsole(executor: ConsoleCommandExecutor): MinecraftCommand  {
        apiCommand.executesConsole(executor)
        return this
    }

    fun executesConsoleWithResult(executor: ConsoleResultingCommandExecutor): MinecraftCommand {
        apiCommand.executesConsole(executor)
        return this
    }

    fun executesEntity(executor: EntityCommandExecutor): MinecraftCommand  {
        apiCommand.executesEntity(executor)
        return this
    }

    fun executesEntityWithResult(executor: EntityResultingCommandExecutor): MinecraftCommand {
        apiCommand.executesEntity(executor)
        return this
    }

    fun executesPlayer(executor: PlayerCommandExecutor): MinecraftCommand  {
        apiCommand.executesPlayer(executor)
        return this
    }

    fun executesPlayerWithResult(executor: PlayerResultingCommandExecutor): MinecraftCommand {
        apiCommand.executesPlayer(executor)
        return this
    }

    fun executesProxy(executor: ProxyCommandExecutor): MinecraftCommand  {
        apiCommand.executesProxy(executor)
        return this
    }

    fun executesProxyWithResult(executor: ProxyResultingCommandExecutor): MinecraftCommand {
        apiCommand.executesProxy(executor)
        return this
    }

    fun withArgument(name: String, arg: Argument): MinecraftCommand {
        arguments[name] = arg
        return this
    }

    fun withPermission(permission: CommandPermission): MinecraftCommand {
        apiCommand.withPermission(permission)
        return this
    }

    fun withAliases(vararg aliases: String): MinecraftCommand {
        apiCommand.withAliases(*aliases)
        return this
    }

    fun register() {
        apiCommand
            .withArguments(arguments)
            .register()
    }
}