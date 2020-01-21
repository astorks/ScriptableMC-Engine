declare var Java: any;

export interface ComponentBuilder$FormatRetention {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class ComponentBuilder$FormatRetention {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.ComponentBuilder$FormatRetention');
	}

	public static get NONE(): ComponentBuilder$FormatRetention {
		return this.$javaClass.NONE;
	}
	public static get FORMATTING(): ComponentBuilder$FormatRetention {
		return this.$javaClass.FORMATTING;
	}
	public static get EVENTS(): ComponentBuilder$FormatRetention {
		return this.$javaClass.EVENTS;
	}
	public static get ALL(): ComponentBuilder$FormatRetention {
		return this.$javaClass.ALL;
	}
}

