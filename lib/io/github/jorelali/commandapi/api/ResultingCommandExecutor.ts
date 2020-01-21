declare var Java: any;
import {CommandSender} from '../../../../../org/bukkit/command/CommandSender.js'

export interface ResultingCommandExecutor {
	run(arg0: CommandSender, arg1: Array<any>): number;
}

export class ResultingCommandExecutor {
	public static get $javaClass(): any {
		return Java.type('io.github.jorelali.commandapi.api.ResultingCommandExecutor');
	}
}

