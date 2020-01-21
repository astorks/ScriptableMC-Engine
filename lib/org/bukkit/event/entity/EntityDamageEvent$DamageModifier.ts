declare var Java: any;

export interface EntityDamageEvent$DamageModifier {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class EntityDamageEvent$DamageModifier {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDamageEvent$DamageModifier');
	}

	public static get BASE(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.BASE;
	}
	public static get HARD_HAT(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.HARD_HAT;
	}
	public static get BLOCKING(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.BLOCKING;
	}
	public static get ARMOR(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.ARMOR;
	}
	public static get RESISTANCE(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.RESISTANCE;
	}
	public static get MAGIC(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.MAGIC;
	}
	public static get ABSORPTION(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.ABSORPTION;
	}
}

