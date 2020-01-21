declare var Java: any;

export interface ChatMessageType {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class ChatMessageType {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.ChatMessageType');
	}

	public static get CHAT(): ChatMessageType {
		return this.$javaClass.CHAT;
	}
	public static get SYSTEM(): ChatMessageType {
		return this.$javaClass.SYSTEM;
	}
	public static get ACTION_BAR(): ChatMessageType {
		return this.$javaClass.ACTION_BAR;
	}
}

