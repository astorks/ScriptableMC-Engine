declare var Java: any;
import {ConversationContext} from '../../../org/bukkit/conversations/ConversationContext.js'
import {ConversationCanceller} from '../../../org/bukkit/conversations/ConversationCanceller.js'
import {Conversation} from '../../../org/bukkit/conversations/Conversation.js'

export interface ConversationAbandonedEvent {
	getContext(): ConversationContext;
	getCanceller(): ConversationCanceller;
	gracefulExit(): boolean;
	getSource(): any;
}

export class ConversationAbandonedEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationAbandonedEvent');
	}
	constructor(conversation: Conversation);
	constructor(conversation: Conversation, canceller: ConversationCanceller);
	constructor(...args: any[]) {
		return new ConversationAbandonedEvent.$javaClass(...args);
	}
}

