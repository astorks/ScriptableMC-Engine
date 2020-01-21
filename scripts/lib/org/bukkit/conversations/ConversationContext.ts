declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Conversable} from '../../../org/bukkit/conversations/Conversable.js'

export interface ConversationContext {
	getPlugin(): Plugin;
	getAllSessionData(): any;
	getSessionData(arg0: any): any;
	setSessionData(arg0: any, arg1: any): void;
	getForWhom(): Conversable;
}

export class ConversationContext {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationContext');
	}
	constructor(arg0: Plugin, arg1: Conversable, arg2: any) {
		return new ConversationContext.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Plugin, arg1: Conversable, arg2: any): ConversationContext {
		return new ConversationContext.$javaClass(arg0, arg1, arg2);
	}
}

