declare var Java: any;

export interface EntityUnleashEvent$UnleashReason {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class EntityUnleashEvent$UnleashReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityUnleashEvent$UnleashReason');
	}

	public static get HOLDER_GONE(): EntityUnleashEvent$UnleashReason {
		return this.$javaClass.HOLDER_GONE;
	}
	public static get PLAYER_UNLEASH(): EntityUnleashEvent$UnleashReason {
		return this.$javaClass.PLAYER_UNLEASH;
	}
	public static get DISTANCE(): EntityUnleashEvent$UnleashReason {
		return this.$javaClass.DISTANCE;
	}
	public static get UNKNOWN(): EntityUnleashEvent$UnleashReason {
		return this.$javaClass.UNKNOWN;
	}
}

