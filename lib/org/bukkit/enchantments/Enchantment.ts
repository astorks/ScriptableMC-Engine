declare var Java: any;
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {EnchantmentTarget} from '../../../org/bukkit/enchantments/EnchantmentTarget.js'
import {Keyed} from '../../../org/bukkit/Keyed.js'

export interface Enchantment extends Keyed {
	getName(): string;
	getKey(): NamespacedKey;
	canEnchantItem(item: ItemStack): boolean;
	getMaxLevel(): number;
	getStartLevel(): number;
	isCursed(): boolean;
	getItemTarget(): EnchantmentTarget;
	conflictsWith(other: Enchantment): boolean;
	isTreasure(): boolean;
}

export class Enchantment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.enchantments.Enchantment');
	}
	constructor(key: NamespacedKey);
	constructor(...args: any[]) {
		return new Enchantment.$javaClass(...args);
	}
	public static get PROTECTION_ENVIRONMENTAL(): Enchantment {
		return Enchantment.$javaClass.PROTECTION_ENVIRONMENTAL;
	}
	public static get PROTECTION_FIRE(): Enchantment {
		return Enchantment.$javaClass.PROTECTION_FIRE;
	}
	public static get PROTECTION_FALL(): Enchantment {
		return Enchantment.$javaClass.PROTECTION_FALL;
	}
	public static get PROTECTION_EXPLOSIONS(): Enchantment {
		return Enchantment.$javaClass.PROTECTION_EXPLOSIONS;
	}
	public static get PROTECTION_PROJECTILE(): Enchantment {
		return Enchantment.$javaClass.PROTECTION_PROJECTILE;
	}
	public static get OXYGEN(): Enchantment {
		return Enchantment.$javaClass.OXYGEN;
	}
	public static get WATER_WORKER(): Enchantment {
		return Enchantment.$javaClass.WATER_WORKER;
	}
	public static get THORNS(): Enchantment {
		return Enchantment.$javaClass.THORNS;
	}
	public static get DEPTH_STRIDER(): Enchantment {
		return Enchantment.$javaClass.DEPTH_STRIDER;
	}
	public static get FROST_WALKER(): Enchantment {
		return Enchantment.$javaClass.FROST_WALKER;
	}
	public static get BINDING_CURSE(): Enchantment {
		return Enchantment.$javaClass.BINDING_CURSE;
	}
	public static get DAMAGE_ALL(): Enchantment {
		return Enchantment.$javaClass.DAMAGE_ALL;
	}
	public static get DAMAGE_UNDEAD(): Enchantment {
		return Enchantment.$javaClass.DAMAGE_UNDEAD;
	}
	public static get DAMAGE_ARTHROPODS(): Enchantment {
		return Enchantment.$javaClass.DAMAGE_ARTHROPODS;
	}
	public static get KNOCKBACK(): Enchantment {
		return Enchantment.$javaClass.KNOCKBACK;
	}
	public static get FIRE_ASPECT(): Enchantment {
		return Enchantment.$javaClass.FIRE_ASPECT;
	}
	public static get LOOT_BONUS_MOBS(): Enchantment {
		return Enchantment.$javaClass.LOOT_BONUS_MOBS;
	}
	public static get SWEEPING_EDGE(): Enchantment {
		return Enchantment.$javaClass.SWEEPING_EDGE;
	}
	public static get DIG_SPEED(): Enchantment {
		return Enchantment.$javaClass.DIG_SPEED;
	}
	public static get SILK_TOUCH(): Enchantment {
		return Enchantment.$javaClass.SILK_TOUCH;
	}
	public static get DURABILITY(): Enchantment {
		return Enchantment.$javaClass.DURABILITY;
	}
	public static get LOOT_BONUS_BLOCKS(): Enchantment {
		return Enchantment.$javaClass.LOOT_BONUS_BLOCKS;
	}
	public static get ARROW_DAMAGE(): Enchantment {
		return Enchantment.$javaClass.ARROW_DAMAGE;
	}
	public static get ARROW_KNOCKBACK(): Enchantment {
		return Enchantment.$javaClass.ARROW_KNOCKBACK;
	}
	public static get ARROW_FIRE(): Enchantment {
		return Enchantment.$javaClass.ARROW_FIRE;
	}
	public static get ARROW_INFINITE(): Enchantment {
		return Enchantment.$javaClass.ARROW_INFINITE;
	}
	public static get LUCK(): Enchantment {
		return Enchantment.$javaClass.LUCK;
	}
	public static get LURE(): Enchantment {
		return Enchantment.$javaClass.LURE;
	}
	public static get LOYALTY(): Enchantment {
		return Enchantment.$javaClass.LOYALTY;
	}
	public static get IMPALING(): Enchantment {
		return Enchantment.$javaClass.IMPALING;
	}
	public static get RIPTIDE(): Enchantment {
		return Enchantment.$javaClass.RIPTIDE;
	}
	public static get CHANNELING(): Enchantment {
		return Enchantment.$javaClass.CHANNELING;
	}
	public static get MULTISHOT(): Enchantment {
		return Enchantment.$javaClass.MULTISHOT;
	}
	public static get QUICK_CHARGE(): Enchantment {
		return Enchantment.$javaClass.QUICK_CHARGE;
	}
	public static get PIERCING(): Enchantment {
		return Enchantment.$javaClass.PIERCING;
	}
	public static get MENDING(): Enchantment {
		return Enchantment.$javaClass.MENDING;
	}
	public static get VANISHING_CURSE(): Enchantment {
		return Enchantment.$javaClass.VANISHING_CURSE;
	}
}

