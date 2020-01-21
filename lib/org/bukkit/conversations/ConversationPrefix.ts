declare var Java: any;
import {ConversationContext} from '../../../org/bukkit/conversations/ConversationContext.js'

export interface ConversationPrefix {
	getPrefix(context: ConversationContext): string;
}

export class ConversationPrefix {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationPrefix');
	}
}

