declare var Java: any;
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../org/bukkit/command/Command.js'

export interface TabCompleter {
	onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): any;
}

export class TabCompleter {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.TabCompleter');
	}
}

