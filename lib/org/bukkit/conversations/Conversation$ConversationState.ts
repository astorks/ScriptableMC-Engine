declare var Java: any;

export interface Conversation$ConversationState {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Conversation$ConversationState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Conversation$ConversationState');
	}

	public static get UNSTARTED(): Conversation$ConversationState {
		return this.$javaClass.UNSTARTED;
	}
	public static get STARTED(): Conversation$ConversationState {
		return this.$javaClass.STARTED;
	}
	public static get ABANDONED(): Conversation$ConversationState {
		return this.$javaClass.ABANDONED;
	}
}

