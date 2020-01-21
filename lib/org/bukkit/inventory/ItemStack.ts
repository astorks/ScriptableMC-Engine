declare var Java: any;
import {Material} from '../../../org/bukkit/Material.js'
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'
import {ItemMeta} from '../../../org/bukkit/inventory/meta/ItemMeta.js'
import {Enchantment} from '../../../org/bukkit/enchantments/Enchantment.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface ItemStack extends ConfigurationSerializable {
	clone(): any;
	clone(): ItemStack;
	getType(): Material;
	serialize(): any;
	setDurability(durability: number): void;
	getAmount(): number;
	getData(): MaterialData;
	setType(type: Material): void;
	hasItemMeta(): boolean;
	getItemMeta(): ItemMeta;
	setAmount(amount: number): void;
	getDurability(): number;
	setData(data: MaterialData): void;
	getMaxStackSize(): number;
	addEnchantments(enchantments: any): void;
	addEnchantment(ench: Enchantment, level: number): void;
	removeEnchantment(ench: Enchantment): number;
	isSimilar(stack: ItemStack): boolean;
	setItemMeta(itemMeta: ItemMeta): boolean;
	getEnchantments(): any;
	addUnsafeEnchantment(ench: Enchantment, level: number): void;
	containsEnchantment(ench: Enchantment): boolean;
	getEnchantmentLevel(ench: Enchantment): number;
	addUnsafeEnchantments(enchantments: any): void;
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

