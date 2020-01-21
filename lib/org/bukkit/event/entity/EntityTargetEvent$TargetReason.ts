declare var Java: any;

export interface EntityTargetEvent$TargetReason {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class EntityTargetEvent$TargetReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTargetEvent$TargetReason');
	}

	public static get TARGET_DIED(): EntityTargetEvent$TargetReason {
		return this.$javaClass.TARGET_DIED;
	}
	public static get CLOSEST_PLAYER(): EntityTargetEvent$TargetReason {
		return this.$javaClass.CLOSEST_PLAYER;
	}
	public static get TARGET_ATTACKED_ENTITY(): EntityTargetEvent$TargetReason {
		return this.$javaClass.TARGET_ATTACKED_ENTITY;
	}
	public static get PIG_ZOMBIE_TARGET(): EntityTargetEvent$TargetReason {
		return this.$javaClass.PIG_ZOMBIE_TARGET;
	}
	public static get FORGOT_TARGET(): EntityTargetEvent$TargetReason {
		return this.$javaClass.FORGOT_TARGET;
	}
	public static get TARGET_ATTACKED_OWNER(): EntityTargetEvent$TargetReason {
		return this.$javaClass.TARGET_ATTACKED_OWNER;
	}
	public static get OWNER_ATTACKED_TARGET(): EntityTargetEvent$TargetReason {
		return this.$javaClass.OWNER_ATTACKED_TARGET;
	}
	public static get RANDOM_TARGET(): EntityTargetEvent$TargetReason {
		return this.$javaClass.RANDOM_TARGET;
	}
	public static get DEFEND_VILLAGE(): EntityTargetEvent$TargetReason {
		return this.$javaClass.DEFEND_VILLAGE;
	}
	public static get TARGET_ATTACKED_NEARBY_ENTITY(): EntityTargetEvent$TargetReason {
		return this.$javaClass.TARGET_ATTACKED_NEARBY_ENTITY;
	}
	public static get REINFORCEMENT_TARGET(): EntityTargetEvent$TargetReason {
		return this.$javaClass.REINFORCEMENT_TARGET;
	}
	public static get COLLISION(): EntityTargetEvent$TargetReason {
		return this.$javaClass.COLLISION;
	}
	public static get CUSTOM(): EntityTargetEvent$TargetReason {
		return this.$javaClass.CUSTOM;
	}
	public static get CLOSEST_ENTITY(): EntityTargetEvent$TargetReason {
		return this.$javaClass.CLOSEST_ENTITY;
	}
	public static get FOLLOW_LEADER(): EntityTargetEvent$TargetReason {
		return this.$javaClass.FOLLOW_LEADER;
	}
	public static get TEMPT(): EntityTargetEvent$TargetReason {
		return this.$javaClass.TEMPT;
	}
	public static get UNKNOWN(): EntityTargetEvent$TargetReason {
		return this.$javaClass.UNKNOWN;
	}
}

