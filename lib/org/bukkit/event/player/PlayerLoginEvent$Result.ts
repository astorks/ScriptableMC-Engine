declare var Java: any;

export interface PlayerLoginEvent$Result {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class PlayerLoginEvent$Result {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerLoginEvent$Result');
	}

	public static get ALLOWED(): PlayerLoginEvent$Result {
		return this.$javaClass.ALLOWED;
	}
	public static get KICK_FULL(): PlayerLoginEvent$Result {
		return this.$javaClass.KICK_FULL;
	}
	public static get KICK_BANNED(): PlayerLoginEvent$Result {
		return this.$javaClass.KICK_BANNED;
	}
	public static get KICK_WHITELIST(): PlayerLoginEvent$Result {
		return this.$javaClass.KICK_WHITELIST;
	}
	public static get KICK_OTHER(): PlayerLoginEvent$Result {
		return this.$javaClass.KICK_OTHER;
	}
}

