declare var Java: any;
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'

export interface HelpTopic {
	getName(): string;
	canSee(arg0: CommandSender): boolean;
	amendTopic(arg0: string, arg1: string): void;
	getFullText(arg0: CommandSender): string;
	amendCanSee(arg0: string): void;
	getShortText(): string;
}

export class HelpTopic {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpTopic');
	}
	constructor() {
		return new HelpTopic.$javaClass();
	}
	public static new0(): HelpTopic {
		return new HelpTopic.$javaClass();
	}
}

