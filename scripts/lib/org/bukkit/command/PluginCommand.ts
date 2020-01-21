declare var Java: any;
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {TabCompleter} from '../../../org/bukkit/command/TabCompleter.js'
import {CommandExecutor} from '../../../org/bukkit/command/CommandExecutor.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {CommandMap} from '../../../org/bukkit/command/CommandMap.js'
import {Command} from '../../../org/bukkit/command/Command.js'
import {Location} from '../../../org/bukkit/Location.js'
import {PluginIdentifiableCommand} from '../../../org/bukkit/command/PluginIdentifiableCommand.js'

export interface PluginCommand extends Command, PluginIdentifiableCommand {
	execute(arg0: CommandSender, arg1: string, arg2: Array<string>): boolean;
	tabComplete(arg0: CommandSender, arg1: string, arg2: Array<string>): any;
	getTabCompleter(): TabCompleter;
	setTabCompleter(arg0: TabCompleter): void;
	setExecutor(arg0: CommandExecutor): void;
	getExecutor(): CommandExecutor;
	getPlugin(): Plugin;
	getName(): string;
	isRegistered(): boolean;
	register(arg0: CommandMap): boolean;
	setName(arg0: string): boolean;
	getPermission(): string;
	setPermission(arg0: string): void;
	unregister(arg0: CommandMap): boolean;
	setPermissionMessage(arg0: string): Command;
	getPermissionMessage(): string;
	testPermissionSilent(arg0: CommandSender): boolean;
	getDescription(): string;
	testPermission(arg0: CommandSender): boolean;
	setDescription(arg0: string): Command;
	tabComplete(arg0: CommandSender, arg1: string, arg2: Array<string>, arg3: Location): any;
	setUsage(arg0: string): Command;
	getAliases(): any;
	getUsage(): string;
	setAliases(arg0: any): Command;
	getLabel(): string;
	setLabel(arg0: string): boolean;
}

export class PluginCommand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.PluginCommand');
	}
	public static broadcastCommandMessage(arg0: CommandSender, arg1: string): void {
		return PluginCommand.$javaClass.broadcastCommandMessage(arg0, arg1);
	}
	public static broadcastCommandMessage0(arg0: CommandSender, arg1: string, arg2: boolean): void {
		return PluginCommand.$javaClass.broadcastCommandMessage(arg0, arg1, arg2);
	}
}

