declare var Java: any;

export interface Particle {
	getDataType(): any;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Particle {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Particle');
	}

	public static get EXPLOSION_NORMAL(): Particle {
		return this.$javaClass.EXPLOSION_NORMAL;
	}
	public static get EXPLOSION_LARGE(): Particle {
		return this.$javaClass.EXPLOSION_LARGE;
	}
	public static get EXPLOSION_HUGE(): Particle {
		return this.$javaClass.EXPLOSION_HUGE;
	}
	public static get FIREWORKS_SPARK(): Particle {
		return this.$javaClass.FIREWORKS_SPARK;
	}
	public static get WATER_BUBBLE(): Particle {
		return this.$javaClass.WATER_BUBBLE;
	}
	public static get WATER_SPLASH(): Particle {
		return this.$javaClass.WATER_SPLASH;
	}
	public static get WATER_WAKE(): Particle {
		return this.$javaClass.WATER_WAKE;
	}
	public static get SUSPENDED(): Particle {
		return this.$javaClass.SUSPENDED;
	}
	public static get SUSPENDED_DEPTH(): Particle {
		return this.$javaClass.SUSPENDED_DEPTH;
	}
	public static get CRIT(): Particle {
		return this.$javaClass.CRIT;
	}
	public static get CRIT_MAGIC(): Particle {
		return this.$javaClass.CRIT_MAGIC;
	}
	public static get SMOKE_NORMAL(): Particle {
		return this.$javaClass.SMOKE_NORMAL;
	}
	public static get SMOKE_LARGE(): Particle {
		return this.$javaClass.SMOKE_LARGE;
	}
	public static get SPELL(): Particle {
		return this.$javaClass.SPELL;
	}
	public static get SPELL_INSTANT(): Particle {
		return this.$javaClass.SPELL_INSTANT;
	}
	public static get SPELL_MOB(): Particle {
		return this.$javaClass.SPELL_MOB;
	}
	public static get SPELL_MOB_AMBIENT(): Particle {
		return this.$javaClass.SPELL_MOB_AMBIENT;
	}
	public static get SPELL_WITCH(): Particle {
		return this.$javaClass.SPELL_WITCH;
	}
	public static get DRIP_WATER(): Particle {
		return this.$javaClass.DRIP_WATER;
	}
	public static get DRIP_LAVA(): Particle {
		return this.$javaClass.DRIP_LAVA;
	}
	public static get VILLAGER_ANGRY(): Particle {
		return this.$javaClass.VILLAGER_ANGRY;
	}
	public static get VILLAGER_HAPPY(): Particle {
		return this.$javaClass.VILLAGER_HAPPY;
	}
	public static get TOWN_AURA(): Particle {
		return this.$javaClass.TOWN_AURA;
	}
	public static get NOTE(): Particle {
		return this.$javaClass.NOTE;
	}
	public static get PORTAL(): Particle {
		return this.$javaClass.PORTAL;
	}
	public static get ENCHANTMENT_TABLE(): Particle {
		return this.$javaClass.ENCHANTMENT_TABLE;
	}
	public static get FLAME(): Particle {
		return this.$javaClass.FLAME;
	}
	public static get LAVA(): Particle {
		return this.$javaClass.LAVA;
	}
	public static get CLOUD(): Particle {
		return this.$javaClass.CLOUD;
	}
	public static get REDSTONE(): Particle {
		return this.$javaClass.REDSTONE;
	}
	public static get SNOWBALL(): Particle {
		return this.$javaClass.SNOWBALL;
	}
	public static get SNOW_SHOVEL(): Particle {
		return this.$javaClass.SNOW_SHOVEL;
	}
	public static get SLIME(): Particle {
		return this.$javaClass.SLIME;
	}
	public static get HEART(): Particle {
		return this.$javaClass.HEART;
	}
	public static get BARRIER(): Particle {
		return this.$javaClass.BARRIER;
	}
	public static get ITEM_CRACK(): Particle {
		return this.$javaClass.ITEM_CRACK;
	}
	public static get BLOCK_CRACK(): Particle {
		return this.$javaClass.BLOCK_CRACK;
	}
	public static get BLOCK_DUST(): Particle {
		return this.$javaClass.BLOCK_DUST;
	}
	public static get WATER_DROP(): Particle {
		return this.$javaClass.WATER_DROP;
	}
	public static get MOB_APPEARANCE(): Particle {
		return this.$javaClass.MOB_APPEARANCE;
	}
	public static get DRAGON_BREATH(): Particle {
		return this.$javaClass.DRAGON_BREATH;
	}
	public static get END_ROD(): Particle {
		return this.$javaClass.END_ROD;
	}
	public static get DAMAGE_INDICATOR(): Particle {
		return this.$javaClass.DAMAGE_INDICATOR;
	}
	public static get SWEEP_ATTACK(): Particle {
		return this.$javaClass.SWEEP_ATTACK;
	}
	public static get FALLING_DUST(): Particle {
		return this.$javaClass.FALLING_DUST;
	}
	public static get TOTEM(): Particle {
		return this.$javaClass.TOTEM;
	}
	public static get SPIT(): Particle {
		return this.$javaClass.SPIT;
	}
	public static get SQUID_INK(): Particle {
		return this.$javaClass.SQUID_INK;
	}
	public static get BUBBLE_POP(): Particle {
		return this.$javaClass.BUBBLE_POP;
	}
	public static get CURRENT_DOWN(): Particle {
		return this.$javaClass.CURRENT_DOWN;
	}
	public static get BUBBLE_COLUMN_UP(): Particle {
		return this.$javaClass.BUBBLE_COLUMN_UP;
	}
	public static get NAUTILUS(): Particle {
		return this.$javaClass.NAUTILUS;
	}
	public static get DOLPHIN(): Particle {
		return this.$javaClass.DOLPHIN;
	}
	public static get SNEEZE(): Particle {
		return this.$javaClass.SNEEZE;
	}
	public static get CAMPFIRE_COSY_SMOKE(): Particle {
		return this.$javaClass.CAMPFIRE_COSY_SMOKE;
	}
	public static get CAMPFIRE_SIGNAL_SMOKE(): Particle {
		return this.$javaClass.CAMPFIRE_SIGNAL_SMOKE;
	}
	public static get COMPOSTER(): Particle {
		return this.$javaClass.COMPOSTER;
	}
	public static get FLASH(): Particle {
		return this.$javaClass.FLASH;
	}
	public static get FALLING_LAVA(): Particle {
		return this.$javaClass.FALLING_LAVA;
	}
	public static get LANDING_LAVA(): Particle {
		return this.$javaClass.LANDING_LAVA;
	}
	public static get FALLING_WATER(): Particle {
		return this.$javaClass.FALLING_WATER;
	}
	public static get DRIPPING_HONEY(): Particle {
		return this.$javaClass.DRIPPING_HONEY;
	}
	public static get FALLING_HONEY(): Particle {
		return this.$javaClass.FALLING_HONEY;
	}
	public static get LANDING_HONEY(): Particle {
		return this.$javaClass.LANDING_HONEY;
	}
	public static get FALLING_NECTAR(): Particle {
		return this.$javaClass.FALLING_NECTAR;
	}
	public static get LEGACY_BLOCK_CRACK(): Particle {
		return this.$javaClass.LEGACY_BLOCK_CRACK;
	}
	public static get LEGACY_BLOCK_DUST(): Particle {
		return this.$javaClass.LEGACY_BLOCK_DUST;
	}
	public static get LEGACY_FALLING_DUST(): Particle {
		return this.$javaClass.LEGACY_FALLING_DUST;
	}
}

