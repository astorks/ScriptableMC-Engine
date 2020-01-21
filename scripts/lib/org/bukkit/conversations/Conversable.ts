declare var Java: any;
import {Conversation} from '../../../org/bukkit/conversations/Conversation.js'
import {ConversationAbandonedEvent} from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js'

export interface Conversable {
	abandonConversation(arg0: Conversation, arg1: ConversationAbandonedEvent): void;
	abandonConversation(arg0: Conversation): void;
	acceptConversationInput(arg0: string): void;
	sendRawMessage(arg0: string): void;
	beginConversation(arg0: Conversation): boolean;
	isConversing(): boolean;
}

export class Conversable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Conversable');
	}
}

