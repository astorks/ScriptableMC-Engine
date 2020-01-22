declare var Java: any;
import {Material} from '../../../org/bukkit/Material.js'
import {Enchantment} from '../../../org/bukkit/enchantments/Enchantment.js'
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'
import {ItemMeta} from '../../../org/bukkit/inventory/meta/ItemMeta.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface ItemStack extends ConfigurationSerializable {
	clone(): ItemStack;
	clone(): any;
	getType(): Material;
	containsEnchantment(ench: Enchantment): boolean;
	addUnsafeEnchantment(ench: Enchantment, level: number): void;
	addUnsafeEnchantments(enchantments: any): void;
	getEnchantmentLevel(ench: Enchantment): number;
	getAmount(): number;
	getData(): MaterialData;
	hasItemMeta(): boolean;
	getItemMeta(): ItemMeta;
	setType(type: Material): void;
	setDurability(durability: number): void;
	getDurability(): number;
	setItemMeta(itemMeta: ItemMeta): boolean;
	isSimilar(stack: ItemStack): boolean;
	serialize(): any;
	setData(data: MaterialData): void;
	setAmount(amount: number): void;
	removeEnchantment(ench: Enchantment): number;
	getEnchantments(): any;
	addEnchantment(ench: Enchantment, level: number): void;
	addEnchantments(enchantments: any): void;
	getMaxStackSize(): number;
}

export class ItemStack {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ItemStack');
	}
	constructor(stack: ItemStack);
	constructor(type: Material, amount: number, damage: number, data: number);
	constructor(type: Material, amount: number, damage: number);
	constructor(type: Material);
	constructor(type: Material, amount: number);
	constructor(...args: any[]) {
		return new ItemStack.$javaClass(...args);
	}
}

