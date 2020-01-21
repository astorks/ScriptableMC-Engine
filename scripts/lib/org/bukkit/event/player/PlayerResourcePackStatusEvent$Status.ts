declare var Java: any;

export interface PlayerResourcePackStatusEvent$Status {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class PlayerResourcePackStatusEvent$Status {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerResourcePackStatusEvent$Status');
	}

	public static get SUCCESSFULLY_LOADED(): PlayerResourcePackStatusEvent$Status {
		return this.$javaClass.SUCCESSFULLY_LOADED;
	}
	public static get DECLINED(): PlayerResourcePackStatusEvent$Status {
		return this.$javaClass.DECLINED;
	}
	public static get FAILED_DOWNLOAD(): PlayerResourcePackStatusEvent$Status {
		return this.$javaClass.FAILED_DOWNLOAD;
	}
	public static get ACCEPTED(): PlayerResourcePackStatusEvent$Status {
		return this.$javaClass.ACCEPTED;
	}
}

