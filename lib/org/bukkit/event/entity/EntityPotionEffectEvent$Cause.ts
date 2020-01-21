declare var Java: any;

export interface EntityPotionEffectEvent$Cause {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class EntityPotionEffectEvent$Cause {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPotionEffectEvent$Cause');
	}

	public static get AREA_EFFECT_CLOUD(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.AREA_EFFECT_CLOUD;
	}
	public static get ARROW(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.ARROW;
	}
	public static get ATTACK(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.ATTACK;
	}
	public static get BEACON(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.BEACON;
	}
	public static get COMMAND(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.COMMAND;
	}
	public static get CONDUIT(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.CONDUIT;
	}
	public static get CONVERSION(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.CONVERSION;
	}
	public static get DEATH(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.DEATH;
	}
	public static get DOLPHIN(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.DOLPHIN;
	}
	public static get EXPIRATION(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.EXPIRATION;
	}
	public static get FOOD(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.FOOD;
	}
	public static get ILLUSION(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.ILLUSION;
	}
	public static get MILK(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.MILK;
	}
	public static get PLUGIN(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.PLUGIN;
	}
	public static get POTION_DRINK(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.POTION_DRINK;
	}
	public static get POTION_SPLASH(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.POTION_SPLASH;
	}
	public static get SPIDER_SPAWN(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.SPIDER_SPAWN;
	}
	public static get TOTEM(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.TOTEM;
	}
	public static get TURTLE_HELMET(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.TURTLE_HELMET;
	}
	public static get UNKNOWN(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.UNKNOWN;
	}
	public static get VILLAGER_TRADE(): EntityPotionEffectEvent$Cause {
		return this.$javaClass.VILLAGER_TRADE;
	}
}

