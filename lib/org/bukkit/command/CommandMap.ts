declare var Java: any;
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../org/bukkit/command/Command.js'
import {Location} from '../../../org/bukkit/Location.js'

export interface CommandMap {
	dispatch(sender: CommandSender, cmdLine: string): boolean;
	register(fallbackPrefix: string, command: Command): boolean;
	register(label: string, fallbackPrefix: string, command: Command): boolean;
	getCommand(_name: string): Command;
	tabComplete(sender: CommandSender, cmdLine: string): any;
	tabComplete(sender: CommandSender, cmdLine: string, location: Location): any;
	clearCommands(): void;
	registerAll(fallbackPrefix: string, commands: any): void;
}

export class CommandMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.CommandMap');
	}
}

