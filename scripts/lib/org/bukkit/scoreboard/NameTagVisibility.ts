declare var Java: any;

export interface NameTagVisibility {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class NameTagVisibility {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.NameTagVisibility');
	}

	public static get ALWAYS(): NameTagVisibility {
		return this.$javaClass.ALWAYS;
	}
	public static get NEVER(): NameTagVisibility {
		return this.$javaClass.NEVER;
	}
	public static get HIDE_FOR_OTHER_TEAMS(): NameTagVisibility {
		return this.$javaClass.HIDE_FOR_OTHER_TEAMS;
	}
	public static get HIDE_FOR_OWN_TEAM(): NameTagVisibility {
		return this.$javaClass.HIDE_FOR_OWN_TEAM;
	}
}

