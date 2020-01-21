declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Material} from '../../../org/bukkit/Material.js'

export interface EnchantmentTarget {
	includes(item: ItemStack): boolean;
	includes(item: Material): boolean;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class EnchantmentTarget {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.enchantments.EnchantmentTarget');
	}

	public static get ALL(): EnchantmentTarget {
		return this.$javaClass.ALL;
	}
	public static get ARMOR(): EnchantmentTarget {
		return this.$javaClass.ARMOR;
	}
	public static get ARMOR_FEET(): EnchantmentTarget {
		return this.$javaClass.ARMOR_FEET;
	}
	public static get ARMOR_LEGS(): EnchantmentTarget {
		return this.$javaClass.ARMOR_LEGS;
	}
	public static get ARMOR_TORSO(): EnchantmentTarget {
		return this.$javaClass.ARMOR_TORSO;
	}
	public static get ARMOR_HEAD(): EnchantmentTarget {
		return this.$javaClass.ARMOR_HEAD;
	}
	public static get WEAPON(): EnchantmentTarget {
		return this.$javaClass.WEAPON;
	}
	public static get TOOL(): EnchantmentTarget {
		return this.$javaClass.TOOL;
	}
	public static get BOW(): EnchantmentTarget {
		return this.$javaClass.BOW;
	}
	public static get FISHING_ROD(): EnchantmentTarget {
		return this.$javaClass.FISHING_ROD;
	}
	public static get BREAKABLE(): EnchantmentTarget {
		return this.$javaClass.BREAKABLE;
	}
	public static get WEARABLE(): EnchantmentTarget {
		return this.$javaClass.WEARABLE;
	}
	public static get TRIDENT(): EnchantmentTarget {
		return this.$javaClass.TRIDENT;
	}
	public static get CROSSBOW(): EnchantmentTarget {
		return this.$javaClass.CROSSBOW;
	}
}

