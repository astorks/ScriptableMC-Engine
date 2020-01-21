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
	constructor(arg0: Conversation) {
		return new ConversationAbandonedEvent.$javaClass(arg0);
	}
	public static new0(arg0: Conversation): ConversationAbandonedEvent {
		return new ConversationAbandonedEvent.$javaClass(arg0);
	}
	public static new1(arg0: Conversation, arg1: ConversationCanceller): ConversationAbandonedEvent {
		return new ConversationAbandonedEvent.$javaClass(arg0, arg1);
	}
}

