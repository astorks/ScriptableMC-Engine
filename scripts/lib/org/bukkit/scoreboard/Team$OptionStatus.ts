declare var Java: any;

export interface Team$OptionStatus {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Team$OptionStatus {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Team$OptionStatus');
	}

	public static get ALWAYS(): Team$OptionStatus {
		return this.$javaClass.ALWAYS;
	}
	public static get NEVER(): Team$OptionStatus {
		return this.$javaClass.NEVER;
	}
	public static get FOR_OTHER_TEAMS(): Team$OptionStatus {
		return this.$javaClass.FOR_OTHER_TEAMS;
	}
	public static get FOR_OWN_TEAM(): Team$OptionStatus {
		return this.$javaClass.FOR_OWN_TEAM;
	}
}

