declare var Java: any;

export interface Team$Option {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Team$Option {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Team$Option');
	}

	public static get NAME_TAG_VISIBILITY(): Team$Option {
		return this.$javaClass.NAME_TAG_VISIBILITY;
	}
	public static get DEATH_MESSAGE_VISIBILITY(): Team$Option {
		return this.$javaClass.DEATH_MESSAGE_VISIBILITY;
	}
	public static get COLLISION_RULE(): Team$Option {
		return this.$javaClass.COLLISION_RULE;
	}
}

