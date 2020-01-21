declare var Java: any;
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../org/bukkit/command/Command.js'
import {TabCompleter} from '../../../org/bukkit/command/TabCompleter.js'
import {CommandExecutor} from '../../../org/bukkit/command/CommandExecutor.js'

export interface TabExecutor extends TabCompleter, CommandExecutor {
	onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): any;
	onCommand(sender: CommandSender, command: Command, label: string, args: Array<string>): boolean;
}

export class TabExecutor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.TabExecutor');
	}
}

