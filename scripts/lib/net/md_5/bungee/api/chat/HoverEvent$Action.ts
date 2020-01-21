declare var Java: any;

export interface HoverEvent$Action {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class HoverEvent$Action {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.HoverEvent$Action');
	}

	public static get SHOW_TEXT(): HoverEvent$Action {
		return this.$javaClass.SHOW_TEXT;
	}
	public static get SHOW_ACHIEVEMENT(): HoverEvent$Action {
		return this.$javaClass.SHOW_ACHIEVEMENT;
	}
	public static get SHOW_ITEM(): HoverEvent$Action {
		return this.$javaClass.SHOW_ITEM;
	}
	public static get SHOW_ENTITY(): HoverEvent$Action {
		return this.$javaClass.SHOW_ENTITY;
	}
}

