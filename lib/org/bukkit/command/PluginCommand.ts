declare var Java: any;
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {CommandExecutor} from '../../../org/bukkit/command/CommandExecutor.js'
import {TabCompleter} from '../../../org/bukkit/command/TabCompleter.js'
import {CommandMap} from '../../../org/bukkit/command/CommandMap.js'
import {Command} from '../../../org/bukkit/command/Command.js'
import {Location} from '../../../org/bukkit/Location.js'
import {PluginIdentifiableCommand} from '../../../org/bukkit/command/PluginIdentifiableCommand.js'

export interface PluginCommand extends Command, PluginIdentifiableCommand {
	execute(sender: CommandSender, commandLabel: string, args: Array<string>): boolean;
	getPlugin(): Plugin;
	getExecutor(): CommandExecutor;
	setTabCompleter(completer: TabCompleter): void;
	getTabCompleter(): TabCompleter;
	setExecutor(executor: CommandExecutor): void;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>): any;
	getName(): string;
	isRegistered(): boolean;
	register(commandMap: CommandMap): boolean;
	setName(_name: string): boolean;
	getPermission(): string;
	setPermission(permission: string): void;
	unregister(commandMap: CommandMap): boolean;
	testPermissionSilent(target: CommandSender): boolean;
	setPermissionMessage(permissionMessage: string): Command;
	getPermissionMessage(): string;
	getDescription(): string;
	getUsage(): string;
	getLabel(): string;
	setUsage(usage: string): Command;
	setLabel(_name: string): boolean;
	testPermission(target: CommandSender): boolean;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): any;
	setAliases(aliases: any): Command;
	getAliases(): any;
	setDescription(description: string): Command;
}

export class PluginCommand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.PluginCommand');
	}
}

