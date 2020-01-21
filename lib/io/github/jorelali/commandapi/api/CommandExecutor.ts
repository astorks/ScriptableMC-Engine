declare var Java: any;
import {CommandSender} from '../../../../../org/bukkit/command/CommandSender.js'

export interface CommandExecutor {
	run(arg0: CommandSender, arg1: Array<any>): void;
}

export class CommandExecutor {
	public static get $javaClass(): any {
		return Java.type('io.github.jorelali.commandapi.api.CommandExecutor');
	}
}

