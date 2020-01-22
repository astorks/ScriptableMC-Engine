declare var Java: any;
import {Enchantment} from '../../../org/bukkit/enchantments/Enchantment.js'

export interface EnchantmentOffer {
	getEnchantmentLevel(): number;
	getEnchantment(): Enchantment;
	setCost(cost: number): void;
	setEnchantment(enchantment: Enchantment): void;
	getCost(): number;
	setEnchantmentLevel(enchantmentLevel: number): void;
}

export class EnchantmentOffer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.enchantments.EnchantmentOffer');
	}
	constructor(enchantment: Enchantment, enchantmentLevel: number, cost: number);
	constructor(...args: any[]) {
		return new EnchantmentOffer.$javaClass(...args);
	}
}

