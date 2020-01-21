declare var Java: any;

export interface Pose {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Pose {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Pose');
	}

	public static get STANDING(): Pose {
		return this.$javaClass.STANDING;
	}
	public static get FALL_FLYING(): Pose {
		return this.$javaClass.FALL_FLYING;
	}
	public static get SLEEPING(): Pose {
		return this.$javaClass.SLEEPING;
	}
	public static get SWIMMING(): Pose {
		return this.$javaClass.SWIMMING;
	}
	public static get SPIN_ATTACK(): Pose {
		return this.$javaClass.SPIN_ATTACK;
	}
	public static get SNEAKING(): Pose {
		return this.$javaClass.SNEAKING;
	}
	public static get DYING(): Pose {
		return this.$javaClass.DYING;
	}
}

