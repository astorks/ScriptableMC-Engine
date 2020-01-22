declare var Java: any;
import {CommandMap} from '../../../org/bukkit/command/CommandMap.js'
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Location} from '../../../org/bukkit/Location.js'

export interface Command {
	getName(): string;
	isRegistered(): boolean;
	register(commandMap: CommandMap): boolean;
	execute(sender: CommandSender, commandLabel: string, args: Array<string>): boolean;
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
	tabComplete(sender: CommandSender, alias: string, args: Array<string>): any;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): any;
	setAliases(aliases: any): Command;
	getAliases(): any;
	setDescription(description: string): Command;
}

export class Command {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.Command');
	}
}

