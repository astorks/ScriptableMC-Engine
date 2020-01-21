declare var Java: any;
import {Conversation} from '../../../org/bukkit/conversations/Conversation.js'
import {ConversationContext} from '../../../org/bukkit/conversations/ConversationContext.js'

export interface ConversationCanceller {
	clone(): any;
	clone(): ConversationCanceller;
	setConversation(conversation: Conversation): void;
	cancelBasedOnInput(context: ConversationContext, input: string): boolean;
}

export class ConversationCanceller {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationCanceller');
	}
}

