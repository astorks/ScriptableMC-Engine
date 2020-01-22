declare var Java: any;
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {Keyed} from '../../../org/bukkit/Keyed.js'

export interface EntityType extends Keyed {
	getName(): string;
	getKey(): NamespacedKey;
	isAlive(): boolean;
	getTypeId(): number;
	getEntityClass(): any;
	isSpawnable(): boolean;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class EntityType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.EntityType');
	}

	public static get DROPPED_ITEM(): EntityType {
		return this.$javaClass.DROPPED_ITEM;
	}
	public static get EXPERIENCE_ORB(): EntityType {
		return this.$javaClass.EXPERIENCE_ORB;
	}
	public static get AREA_EFFECT_CLOUD(): EntityType {
		return this.$javaClass.AREA_EFFECT_CLOUD;
	}
	public static get ELDER_GUARDIAN(): EntityType {
		return this.$javaClass.ELDER_GUARDIAN;
	}
	public static get WITHER_SKELETON(): EntityType {
		return this.$javaClass.WITHER_SKELETON;
	}
	public static get STRAY(): EntityType {
		return this.$javaClass.STRAY;
	}
	public static get EGG(): EntityType {
		return this.$javaClass.EGG;
	}
	public static get LEASH_HITCH(): EntityType {
		return this.$javaClass.LEASH_HITCH;
	}
	public static get PAINTING(): EntityType {
		return this.$javaClass.PAINTING;
	}
	public static get ARROW(): EntityType {
		return this.$javaClass.ARROW;
	}
	public static get SNOWBALL(): EntityType {
		return this.$javaClass.SNOWBALL;
	}
	public static get FIREBALL(): EntityType {
		return this.$javaClass.FIREBALL;
	}
	public static get SMALL_FIREBALL(): EntityType {
		return this.$javaClass.SMALL_FIREBALL;
	}
	public static get ENDER_PEARL(): EntityType {
		return this.$javaClass.ENDER_PEARL;
	}
	public static get ENDER_SIGNAL(): EntityType {
		return this.$javaClass.ENDER_SIGNAL;
	}
	public static get SPLASH_POTION(): EntityType {
		return this.$javaClass.SPLASH_POTION;
	}
	public static get THROWN_EXP_BOTTLE(): EntityType {
		return this.$javaClass.THROWN_EXP_BOTTLE;
	}
	public static get ITEM_FRAME(): EntityType {
		return this.$javaClass.ITEM_FRAME;
	}
	public static get WITHER_SKULL(): EntityType {
		return this.$javaClass.WITHER_SKULL;
	}
	public static get PRIMED_TNT(): EntityType {
		return this.$javaClass.PRIMED_TNT;
	}
	public static get FALLING_BLOCK(): EntityType {
		return this.$javaClass.FALLING_BLOCK;
	}
	public static get FIREWORK(): EntityType {
		return this.$javaClass.FIREWORK;
	}
	public static get HUSK(): EntityType {
		return this.$javaClass.HUSK;
	}
	public static get SPECTRAL_ARROW(): EntityType {
		return this.$javaClass.SPECTRAL_ARROW;
	}
	public static get SHULKER_BULLET(): EntityType {
		return this.$javaClass.SHULKER_BULLET;
	}
	public static get DRAGON_FIREBALL(): EntityType {
		return this.$javaClass.DRAGON_FIREBALL;
	}
	public static get ZOMBIE_VILLAGER(): EntityType {
		return this.$javaClass.ZOMBIE_VILLAGER;
	}
	public static get SKELETON_HORSE(): EntityType {
		return this.$javaClass.SKELETON_HORSE;
	}
	public static get ZOMBIE_HORSE(): EntityType {
		return this.$javaClass.ZOMBIE_HORSE;
	}
	public static get ARMOR_STAND(): EntityType {
		return this.$javaClass.ARMOR_STAND;
	}
	public static get DONKEY(): EntityType {
		return this.$javaClass.DONKEY;
	}
	public static get MULE(): EntityType {
		return this.$javaClass.MULE;
	}
	public static get EVOKER_FANGS(): EntityType {
		return this.$javaClass.EVOKER_FANGS;
	}
	public static get EVOKER(): EntityType {
		return this.$javaClass.EVOKER;
	}
	public static get VEX(): EntityType {
		return this.$javaClass.VEX;
	}
	public static get VINDICATOR(): EntityType {
		return this.$javaClass.VINDICATOR;
	}
	public static get ILLUSIONER(): EntityType {
		return this.$javaClass.ILLUSIONER;
	}
	public static get MINECART_COMMAND(): EntityType {
		return this.$javaClass.MINECART_COMMAND;
	}
	public static get BOAT(): EntityType {
		return this.$javaClass.BOAT;
	}
	public static get MINECART(): EntityType {
		return this.$javaClass.MINECART;
	}
	public static get MINECART_CHEST(): EntityType {
		return this.$javaClass.MINECART_CHEST;
	}
	public static get MINECART_FURNACE(): EntityType {
		return this.$javaClass.MINECART_FURNACE;
	}
	public static get MINECART_TNT(): EntityType {
		return this.$javaClass.MINECART_TNT;
	}
	public static get MINECART_HOPPER(): EntityType {
		return this.$javaClass.MINECART_HOPPER;
	}
	public static get MINECART_MOB_SPAWNER(): EntityType {
		return this.$javaClass.MINECART_MOB_SPAWNER;
	}
	public static get CREEPER(): EntityType {
		return this.$javaClass.CREEPER;
	}
	public static get SKELETON(): EntityType {
		return this.$javaClass.SKELETON;
	}
	public static get SPIDER(): EntityType {
		return this.$javaClass.SPIDER;
	}
	public static get GIANT(): EntityType {
		return this.$javaClass.GIANT;
	}
	public static get ZOMBIE(): EntityType {
		return this.$javaClass.ZOMBIE;
	}
	public static get SLIME(): EntityType {
		return this.$javaClass.SLIME;
	}
	public static get GHAST(): EntityType {
		return this.$javaClass.GHAST;
	}
	public static get PIG_ZOMBIE(): EntityType {
		return this.$javaClass.PIG_ZOMBIE;
	}
	public static get ENDERMAN(): EntityType {
		return this.$javaClass.ENDERMAN;
	}
	public static get CAVE_SPIDER(): EntityType {
		return this.$javaClass.CAVE_SPIDER;
	}
	public static get SILVERFISH(): EntityType {
		return this.$javaClass.SILVERFISH;
	}
	public static get BLAZE(): EntityType {
		return this.$javaClass.BLAZE;
	}
	public static get MAGMA_CUBE(): EntityType {
		return this.$javaClass.MAGMA_CUBE;
	}
	public static get ENDER_DRAGON(): EntityType {
		return this.$javaClass.ENDER_DRAGON;
	}
	public static get WITHER(): EntityType {
		return this.$javaClass.WITHER;
	}
	public static get BAT(): EntityType {
		return this.$javaClass.BAT;
	}
	public static get WITCH(): EntityType {
		return this.$javaClass.WITCH;
	}
	public static get ENDERMITE(): EntityType {
		return this.$javaClass.ENDERMITE;
	}
	public static get GUARDIAN(): EntityType {
		return this.$javaClass.GUARDIAN;
	}
	public static get SHULKER(): EntityType {
		return this.$javaClass.SHULKER;
	}
	public static get PIG(): EntityType {
		return this.$javaClass.PIG;
	}
	public static get SHEEP(): EntityType {
		return this.$javaClass.SHEEP;
	}
	public static get COW(): EntityType {
		return this.$javaClass.COW;
	}
	public static get CHICKEN(): EntityType {
		return this.$javaClass.CHICKEN;
	}
	public static get SQUID(): EntityType {
		return this.$javaClass.SQUID;
	}
	public static get WOLF(): EntityType {
		return this.$javaClass.WOLF;
	}
	public static get MUSHROOM_COW(): EntityType {
		return this.$javaClass.MUSHROOM_COW;
	}
	public static get SNOWMAN(): EntityType {
		return this.$javaClass.SNOWMAN;
	}
	public static get OCELOT(): EntityType {
		return this.$javaClass.OCELOT;
	}
	public static get IRON_GOLEM(): EntityType {
		return this.$javaClass.IRON_GOLEM;
	}
	public static get HORSE(): EntityType {
		return this.$javaClass.HORSE;
	}
	public static get RABBIT(): EntityType {
		return this.$javaClass.RABBIT;
	}
	public static get POLAR_BEAR(): EntityType {
		return this.$javaClass.POLAR_BEAR;
	}
	public static get LLAMA(): EntityType {
		return this.$javaClass.LLAMA;
	}
	public static get LLAMA_SPIT(): EntityType {
		return this.$javaClass.LLAMA_SPIT;
	}
	public static get PARROT(): EntityType {
		return this.$javaClass.PARROT;
	}
	public static get VILLAGER(): EntityType {
		return this.$javaClass.VILLAGER;
	}
	public static get ENDER_CRYSTAL(): EntityType {
		return this.$javaClass.ENDER_CRYSTAL;
	}
	public static get TURTLE(): EntityType {
		return this.$javaClass.TURTLE;
	}
	public static get PHANTOM(): EntityType {
		return this.$javaClass.PHANTOM;
	}
	public static get TRIDENT(): EntityType {
		return this.$javaClass.TRIDENT;
	}
	public static get COD(): EntityType {
		return this.$javaClass.COD;
	}
	public static get SALMON(): EntityType {
		return this.$javaClass.SALMON;
	}
	public static get PUFFERFISH(): EntityType {
		return this.$javaClass.PUFFERFISH;
	}
	public static get TROPICAL_FISH(): EntityType {
		return this.$javaClass.TROPICAL_FISH;
	}
	public static get DROWNED(): EntityType {
		return this.$javaClass.DROWNED;
	}
	public static get DOLPHIN(): EntityType {
		return this.$javaClass.DOLPHIN;
	}
	public static get CAT(): EntityType {
		return this.$javaClass.CAT;
	}
	public static get PANDA(): EntityType {
		return this.$javaClass.PANDA;
	}
	public static get PILLAGER(): EntityType {
		return this.$javaClass.PILLAGER;
	}
	public static get RAVAGER(): EntityType {
		return this.$javaClass.RAVAGER;
	}
	public static get TRADER_LLAMA(): EntityType {
		return this.$javaClass.TRADER_LLAMA;
	}
	public static get WANDERING_TRADER(): EntityType {
		return this.$javaClass.WANDERING_TRADER;
	}
	public static get FOX(): EntityType {
		return this.$javaClass.FOX;
	}
	public static get BEE(): EntityType {
		return this.$javaClass.BEE;
	}
	public static get FISHING_HOOK(): EntityType {
		return this.$javaClass.FISHING_HOOK;
	}
	public static get LIGHTNING(): EntityType {
		return this.$javaClass.LIGHTNING;
	}
	public static get PLAYER(): EntityType {
		return this.$javaClass.PLAYER;
	}
	public static get UNKNOWN(): EntityType {
		return this.$javaClass.UNKNOWN;
	}
}

