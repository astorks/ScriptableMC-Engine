declare var Java: any;

export interface PlayerTeleportEvent$TeleportCause {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class PlayerTeleportEvent$TeleportCause {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerTeleportEvent$TeleportCause');
	}

	public static get ENDER_PEARL(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.ENDER_PEARL;
	}
	public static get COMMAND(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.COMMAND;
	}
	public static get PLUGIN(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.PLUGIN;
	}
	public static get NETHER_PORTAL(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.NETHER_PORTAL;
	}
	public static get END_PORTAL(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.END_PORTAL;
	}
	public static get SPECTATE(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.SPECTATE;
	}
	public static get END_GATEWAY(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.END_GATEWAY;
	}
	public static get CHORUS_FRUIT(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.CHORUS_FRUIT;
	}
	public static get UNKNOWN(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.UNKNOWN;
	}
}

