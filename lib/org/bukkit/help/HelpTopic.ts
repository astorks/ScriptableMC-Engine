declare var Java: any;
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'

export interface HelpTopic {
	getName(): string;
	canSee(player: CommandSender): boolean;
	amendCanSee(amendedPermission: string): void;
	amendTopic(amendedShortText: string, amendedFullText: string): void;
	getFullText(forWho: CommandSender): string;
	getShortText(): string;
}

export class HelpTopic {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpTopic');
	}
	constructor();
	constructor(...args: any[]) {
		return new HelpTopic.$javaClass(...args);
	}
}

