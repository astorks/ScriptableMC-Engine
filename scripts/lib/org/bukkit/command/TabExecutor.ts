declare var Java: any;
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../org/bukkit/command/Command.js'
import {TabCompleter} from '../../../org/bukkit/command/TabCompleter.js'
import {CommandExecutor} from '../../../org/bukkit/command/CommandExecutor.js'

export interface TabExecutor extends TabCompleter, CommandExecutor {
	onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): any;
	onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
}

export class TabExecutor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.TabExecutor');
	}
}

