declare var Java: any;
import {CommandMap} from '../../../org/bukkit/command/CommandMap.js'
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Location} from '../../../org/bukkit/Location.js'

export interface Command {
	getName(): string;
	isRegistered(): boolean;
	register(arg0: CommandMap): boolean;
	execute(arg0: CommandSender, arg1: string, arg2: Array<string>): boolean;
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
	tabComplete(arg0: CommandSender, arg1: string, arg2: Array<string>): any;
	setUsage(arg0: string): Command;
	getAliases(): any;
	getUsage(): string;
	setAliases(arg0: any): Command;
	getLabel(): string;
	setLabel(arg0: string): boolean;
}

export class Command {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.Command');
	}
	public static broadcastCommandMessage(arg0: CommandSender, arg1: string): void {
		return Command.$javaClass.broadcastCommandMessage(arg0, arg1);
	}
	public static broadcastCommandMessage0(arg0: CommandSender, arg1: string, arg2: boolean): void {
		return Command.$javaClass.broadcastCommandMessage(arg0, arg1, arg2);
	}
}

