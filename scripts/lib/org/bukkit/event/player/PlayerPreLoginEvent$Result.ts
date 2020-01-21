declare var Java: any;

export interface PlayerPreLoginEvent$Result {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class PlayerPreLoginEvent$Result {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerPreLoginEvent$Result');
	}

	public static get ALLOWED(): PlayerPreLoginEvent$Result {
		return this.$javaClass.ALLOWED;
	}
	public static get KICK_FULL(): PlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_FULL;
	}
	public static get KICK_BANNED(): PlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_BANNED;
	}
	public static get KICK_WHITELIST(): PlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_WHITELIST;
	}
	public static get KICK_OTHER(): PlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_OTHER;
	}
}

