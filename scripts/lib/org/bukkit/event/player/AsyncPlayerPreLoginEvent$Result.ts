declare var Java: any;

export interface AsyncPlayerPreLoginEvent$Result {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class AsyncPlayerPreLoginEvent$Result {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.AsyncPlayerPreLoginEvent$Result');
	}

	public static get ALLOWED(): AsyncPlayerPreLoginEvent$Result {
		return this.$javaClass.ALLOWED;
	}
	public static get KICK_FULL(): AsyncPlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_FULL;
	}
	public static get KICK_BANNED(): AsyncPlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_BANNED;
	}
	public static get KICK_WHITELIST(): AsyncPlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_WHITELIST;
	}
	public static get KICK_OTHER(): AsyncPlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_OTHER;
	}
}

