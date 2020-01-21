declare var Java: any;
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {CommandExecutor} from '../../../org/bukkit/command/CommandExecutor.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {TabCompleter} from '../../../org/bukkit/command/TabCompleter.js'
import {CommandMap} from '../../../org/bukkit/command/CommandMap.js'
import {Command} from '../../../org/bukkit/command/Command.js'
import {Location} from '../../../org/bukkit/Location.js'
import {PluginIdentifiableCommand} from '../../../org/bukkit/command/PluginIdentifiableCommand.js'

export interface PluginCommand extends Command, PluginIdentifiableCommand {
	execute(sender: CommandSender, commandLabel: string, args: Array<string>): boolean;
	setExecutor(executor: CommandExecutor): void;
	getExecutor(): CommandExecutor;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>): any;
	getPlugin(): Plugin;
	getTabCompleter(): TabCompleter;
	setTabCompleter(completer: TabCompleter): void;
	getName(): string;
	isRegistered(): boolean;
	register(commandMap: CommandMap): boolean;
	setName(_name: string): boolean;
	getPermission(): string;
	setPermission(permission: string): void;
	unregister(commandMap: CommandMap): boolean;
	testPermissionSilent(target: CommandSender): boolean;
	getPermissionMessage(): string;
	setPermissionMessage(permissionMessage: string): Command;
	getDescription(): string;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): any;
	testPermission(target: CommandSender): boolean;
	setDescription(description: string): Command;
	setAliases(aliases: any): Command;
	getUsage(): string;
	setUsage(usage: string): Command;
	setLabel(_name: string): boolean;
	getLabel(): string;
	getAliases(): any;
}

export class PluginCommand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.PluginCommand');
	}
}

