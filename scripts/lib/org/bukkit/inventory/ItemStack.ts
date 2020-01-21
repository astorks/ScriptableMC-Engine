declare var Java: any;
import {Material} from '../../../org/bukkit/Material.js'
import {Enchantment} from '../../../org/bukkit/enchantments/Enchantment.js'
import {ItemMeta} from '../../../org/bukkit/inventory/meta/ItemMeta.js'
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface ItemStack extends ConfigurationSerializable {
	clone(): any;
	clone(): ItemStack;
	getType(): Material;
	getEnchantmentLevel(arg0: Enchantment): number;
	addUnsafeEnchantment(arg0: Enchantment, arg1: number): void;
	addUnsafeEnchantments(arg0: any): void;
	containsEnchantment(arg0: Enchantment): boolean;
	serialize(): any;
	getItemMeta(): ItemMeta;
	hasItemMeta(): boolean;
	setAmount(arg0: number): void;
	getDurability(): number;
	setType(arg0: Material): void;
	setItemMeta(arg0: ItemMeta): boolean;
	getAmount(): number;
	isSimilar(arg0: ItemStack): boolean;
	getEnchantments(): any;
	addEnchantments(arg0: any): void;
	addEnchantment(arg0: Enchantment, arg1: number): void;
	setDurability(arg0: number): void;
	removeEnchantment(arg0: Enchantment): number;
	getData(): MaterialData;
	getMaxStackSize(): number;
	setData(arg0: MaterialData): void;
}

export class ItemStack {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ItemStack');
	}
	constructor(arg0: ItemStack) {
		return new ItemStack.$javaClass(arg0);
	}
	public static new0(arg0: ItemStack): ItemStack {
		return new ItemStack.$javaClass(arg0);
	}
	public static new1(arg0: Material, arg1: number, arg2: number, arg3: number): ItemStack {
		return new ItemStack.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new2(arg0: Material, arg1: number, arg2: number): ItemStack {
		return new ItemStack.$javaClass(arg0, arg1, arg2);
	}
	public static new3(arg0: Material): ItemStack {
		return new ItemStack.$javaClass(arg0);
	}
	public static new4(arg0: Material, arg1: number): ItemStack {
		return new ItemStack.$javaClass(arg0, arg1);
	}
	public static deserialize(arg0: any): ItemStack {
		return ItemStack.$javaClass.deserialize(arg0);
	}
}

