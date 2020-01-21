declare var Java: any;
import {Conversation} from '../../../org/bukkit/conversations/Conversation.js'
import {ConversationAbandonedEvent} from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js'

export interface Conversable {
	isConversing(): boolean;
	beginConversation(conversation: Conversation): boolean;
	sendRawMessage(message: string): void;
	acceptConversationInput(input: string): void;
	abandonConversation(conversation: Conversation, details: ConversationAbandonedEvent): void;
	abandonConversation(conversation: Conversation): void;
}

export class Conversable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Conversable');
	}
}

