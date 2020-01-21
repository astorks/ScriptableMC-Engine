declare var Java: any;

export interface EntityDamageEvent$DamageCause {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class EntityDamageEvent$DamageCause {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDamageEvent$DamageCause');
	}

	public static get CONTACT(): EntityDamageEvent$DamageCause {
		return this.$javaClass.CONTACT;
	}
	public static get ENTITY_ATTACK(): EntityDamageEvent$DamageCause {
		return this.$javaClass.ENTITY_ATTACK;
	}
	public static get ENTITY_SWEEP_ATTACK(): EntityDamageEvent$DamageCause {
		return this.$javaClass.ENTITY_SWEEP_ATTACK;
	}
	public static get PROJECTILE(): EntityDamageEvent$DamageCause {
		return this.$javaClass.PROJECTILE;
	}
	public static get SUFFOCATION(): EntityDamageEvent$DamageCause {
		return this.$javaClass.SUFFOCATION;
	}
	public static get FALL(): EntityDamageEvent$DamageCause {
		return this.$javaClass.FALL;
	}
	public static get FIRE(): EntityDamageEvent$DamageCause {
		return this.$javaClass.FIRE;
	}
	public static get FIRE_TICK(): EntityDamageEvent$DamageCause {
		return this.$javaClass.FIRE_TICK;
	}
	public static get MELTING(): EntityDamageEvent$DamageCause {
		return this.$javaClass.MELTING;
	}
	public static get LAVA(): EntityDamageEvent$DamageCause {
		return this.$javaClass.LAVA;
	}
	public static get DROWNING(): EntityDamageEvent$DamageCause {
		return this.$javaClass.DROWNING;
	}
	public static get BLOCK_EXPLOSION(): EntityDamageEvent$DamageCause {
		return this.$javaClass.BLOCK_EXPLOSION;
	}
	public static get ENTITY_EXPLOSION(): EntityDamageEvent$DamageCause {
		return this.$javaClass.ENTITY_EXPLOSION;
	}
	public static get VOID(): EntityDamageEvent$DamageCause {
		return this.$javaClass.VOID;
	}
	public static get LIGHTNING(): EntityDamageEvent$DamageCause {
		return this.$javaClass.LIGHTNING;
	}
	public static get SUICIDE(): EntityDamageEvent$DamageCause {
		return this.$javaClass.SUICIDE;
	}
	public static get STARVATION(): EntityDamageEvent$DamageCause {
		return this.$javaClass.STARVATION;
	}
	public static get POISON(): EntityDamageEvent$DamageCause {
		return this.$javaClass.POISON;
	}
	public static get MAGIC(): EntityDamageEvent$DamageCause {
		return this.$javaClass.MAGIC;
	}
	public static get WITHER(): EntityDamageEvent$DamageCause {
		return this.$javaClass.WITHER;
	}
	public static get FALLING_BLOCK(): EntityDamageEvent$DamageCause {
		return this.$javaClass.FALLING_BLOCK;
	}
	public static get THORNS(): EntityDamageEvent$DamageCause {
		return this.$javaClass.THORNS;
	}
	public static get DRAGON_BREATH(): EntityDamageEvent$DamageCause {
		return this.$javaClass.DRAGON_BREATH;
	}
	public static get CUSTOM(): EntityDamageEvent$DamageCause {
		return this.$javaClass.CUSTOM;
	}
	public static get FLY_INTO_WALL(): EntityDamageEvent$DamageCause {
		return this.$javaClass.FLY_INTO_WALL;
	}
	public static get HOT_FLOOR(): EntityDamageEvent$DamageCause {
		return this.$javaClass.HOT_FLOOR;
	}
	public static get CRAMMING(): EntityDamageEvent$DamageCause {
		return this.$javaClass.CRAMMING;
	}
	public static get DRYOUT(): EntityDamageEvent$DamageCause {
		return this.$javaClass.DRYOUT;
	}
}

