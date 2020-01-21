declare var Java: any;
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../org/bukkit/command/Command.js'
import {Location} from '../../../org/bukkit/Location.js'

export interface CommandMap {
	dispatch(arg0: CommandSender, arg1: string): boolean;
	register(arg0: string, arg1: Command): boolean;
	register(arg0: string, arg1: string, arg2: Command): boolean;
	tabComplete(arg0: CommandSender, arg1: string): any;
	tabComplete(arg0: CommandSender, arg1: string, arg2: Location): any;
	registerAll(arg0: string, arg1: any): void;
	clearCommands(): void;
	getCommand(arg0: string): Command;
}

export class CommandMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.CommandMap');
	}
}

