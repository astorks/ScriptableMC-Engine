declare var Java: any;

export interface Event$Result {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Event$Result {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.Event$Result');
	}

	public static get DENY(): Event$Result {
		return this.$javaClass.DENY;
	}
	public static get DEFAULT(): Event$Result {
		return this.$javaClass.DEFAULT;
	}
	public static get ALLOW(): Event$Result {
		return this.$javaClass.ALLOW;
	}
}

