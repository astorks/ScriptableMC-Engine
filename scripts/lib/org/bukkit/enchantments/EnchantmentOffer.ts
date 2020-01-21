declare var Java: any;
import {Enchantment} from '../../../org/bukkit/enchantments/Enchantment.js'

export interface EnchantmentOffer {
	getEnchantmentLevel(): number;
	getEnchantment(): Enchantment;
	setEnchantmentLevel(arg0: number): void;
	setEnchantment(arg0: Enchantment): void;
	getCost(): number;
	setCost(arg0: number): void;
}

export class EnchantmentOffer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.enchantments.EnchantmentOffer');
	}
	constructor(arg0: Enchantment, arg1: number, arg2: number) {
		return new EnchantmentOffer.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Enchantment, arg1: number, arg2: number): EnchantmentOffer {
		return new EnchantmentOffer.$javaClass(arg0, arg1, arg2);
	}
}

