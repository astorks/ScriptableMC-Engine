declare var Java: any;

export interface PlayerBedEnterEvent$BedEnterResult {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class PlayerBedEnterEvent$BedEnterResult {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBedEnterEvent$BedEnterResult');
	}

	public static get OK(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.OK;
	}
	public static get NOT_POSSIBLE_HERE(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.NOT_POSSIBLE_HERE;
	}
	public static get NOT_POSSIBLE_NOW(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.NOT_POSSIBLE_NOW;
	}
	public static get TOO_FAR_AWAY(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.TOO_FAR_AWAY;
	}
	public static get NOT_SAFE(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.NOT_SAFE;
	}
	public static get OTHER_PROBLEM(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.OTHER_PROBLEM;
	}
}

