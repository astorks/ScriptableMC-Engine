declare var Java: any;

export interface EntityRegainHealthEvent$RegainReason {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class EntityRegainHealthEvent$RegainReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityRegainHealthEvent$RegainReason');
	}

	public static get REGEN(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.REGEN;
	}
	public static get SATIATED(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.SATIATED;
	}
	public static get EATING(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.EATING;
	}
	public static get ENDER_CRYSTAL(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.ENDER_CRYSTAL;
	}
	public static get MAGIC(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.MAGIC;
	}
	public static get MAGIC_REGEN(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.MAGIC_REGEN;
	}
	public static get WITHER_SPAWN(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.WITHER_SPAWN;
	}
	public static get WITHER(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.WITHER;
	}
	public static get CUSTOM(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.CUSTOM;
	}
}

