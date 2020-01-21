declare var Java: any;
import {ConversationContext} from '../../../org/bukkit/conversations/ConversationContext.js'

export interface Prompt {
	getPromptText(arg0: ConversationContext): string;
	acceptInput(arg0: ConversationContext, arg1: string): Prompt;
	blocksForInput(arg0: ConversationContext): boolean;
}

export class Prompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Prompt');
	}
}

