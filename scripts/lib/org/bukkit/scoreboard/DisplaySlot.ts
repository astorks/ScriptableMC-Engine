declare var Java: any;

export interface DisplaySlot {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class DisplaySlot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.DisplaySlot');
	}

	public static get BELOW_NAME(): DisplaySlot {
		return this.$javaClass.BELOW_NAME;
	}
	public static get PLAYER_LIST(): DisplaySlot {
		return this.$javaClass.PLAYER_LIST;
	}
	public static get SIDEBAR(): DisplaySlot {
		return this.$javaClass.SIDEBAR;
	}
}

