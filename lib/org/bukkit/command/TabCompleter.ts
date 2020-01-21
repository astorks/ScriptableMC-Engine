declare var Java: any;
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../org/bukkit/command/Command.js'

export interface TabCompleter {
	onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): any;
}

export class TabCompleter {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.TabCompleter');
	}
}

