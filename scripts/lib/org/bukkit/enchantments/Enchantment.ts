declare var Java: any;
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {EnchantmentTarget} from '../../../org/bukkit/enchantments/EnchantmentTarget.js'
import {Keyed} from '../../../org/bukkit/Keyed.js'

export interface Enchantment extends Keyed {
	getName(): string;
	getKey(): NamespacedKey;
	getStartLevel(): number;
	getMaxLevel(): number;
	canEnchantItem(arg0: ItemStack): boolean;
	isTreasure(): boolean;
	getItemTarget(): EnchantmentTarget;
	isCursed(): boolean;
	conflictsWith(arg0: Enchantment): boolean;
}

export class Enchantment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.enchantments.Enchantment');
	}
	constructor(arg0: NamespacedKey) {
		return new Enchantment.$javaClass(arg0);
	}
	public static new0(arg0: NamespacedKey): Enchantment {
		return new Enchantment.$javaClass(arg0);
	}
	public static values(): Array<Enchantment> {
		return Enchantment.$javaClass.values();
	}
	public static getByName(arg0: string): Enchantment {
		return Enchantment.$javaClass.getByName(arg0);
	}
	public static stopAcceptingRegistrations(): void {
		return Enchantment.$javaClass.stopAcceptingRegistrations();
	}
	public static registerEnchantment(arg0: Enchantment): void {
		return Enchantment.$javaClass.registerEnchantment(arg0);
	}
	public static isAcceptingRegistrations(): boolean {
		return Enchantment.$javaClass.isAcceptingRegistrations();
	}
	public static getByKey(arg0: NamespacedKey): Enchantment {
		return Enchantment.$javaClass.getByKey(arg0);
	}
}

