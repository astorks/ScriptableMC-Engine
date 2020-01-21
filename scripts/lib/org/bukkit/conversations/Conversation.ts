declare var Java: any;
import {ConversationContext} from '../../../org/bukkit/conversations/ConversationContext.js'
import {Conversation$ConversationState} from '../../../org/bukkit/conversations/Conversation$ConversationState.js'
import {ConversationPrefix} from '../../../org/bukkit/conversations/ConversationPrefix.js'
import {ConversationAbandonedListener} from '../../../org/bukkit/conversations/ConversationAbandonedListener.js'
import {ConversationAbandonedEvent} from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js'
import {Conversable} from '../../../org/bukkit/conversations/Conversable.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Prompt} from '../../../org/bukkit/conversations/Prompt.js'

export interface Conversation {
	begin(): void;
	getContext(): ConversationContext;
	getState(): Conversation$ConversationState;
	getPrefix(): ConversationPrefix;
	removeConversationAbandonedListener(arg0: ConversationAbandonedListener): void;
	acceptInput(arg0: string): void;
	outputNextPrompt(): void;
	abandon(): void;
	abandon(arg0: ConversationAbandonedEvent): void;
	getCancellers(): any;
	isLocalEchoEnabled(): boolean;
	getForWhom(): Conversable;
	isModal(): boolean;
	setLocalEchoEnabled(arg0: boolean): void;
	addConversationAbandonedListener(arg0: ConversationAbandonedListener): void;
}

export class Conversation {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Conversation');
	}
	constructor(arg0: Plugin, arg1: Conversable, arg2: Prompt) {
		return new Conversation.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Plugin, arg1: Conversable, arg2: Prompt): Conversation {
		return new Conversation.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: Plugin, arg1: Conversable, arg2: Prompt, arg3: any): Conversation {
		return new Conversation.$javaClass(arg0, arg1, arg2, arg3);
	}
}

