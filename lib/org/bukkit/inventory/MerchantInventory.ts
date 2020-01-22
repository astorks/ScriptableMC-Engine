declare var Java: any;
import {MerchantRecipe} from '../../../org/bukkit/inventory/MerchantRecipe.js'
import {Merchant} from '../../../org/bukkit/inventory/Merchant.js'
import {Material} from '../../../org/bukkit/Material.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Location} from '../../../org/bukkit/Location.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {InventoryHolder} from '../../../org/bukkit/inventory/InventoryHolder.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'

export interface MerchantInventory extends Inventory {
	getSelectedRecipe(): MerchantRecipe;
	getMerchant(): Merchant;
	getSelectedRecipeIndex(): number;
	remove(material: Material): void;
	remove(item: ItemStack): void;
	clear(): void;
	clear(index: number): void;
	contains(material: Material): boolean;
	contains(item: ItemStack, amount: number): boolean;
	contains(material: Material, amount: number): boolean;
	contains(item: ItemStack): boolean;
	iterator(): any;
	iterator(): any;
	iterator(index: number): any;
	first(item: ItemStack): number;
	first(material: Material): number;
	getLocation(): Location;
	getType(): InventoryType;
	getSize(): number;
	all(material: Material): any;
	all(item: ItemStack): any;
	setContents(items: Array<ItemStack>): void;
	getMaxStackSize(): number;
	getContents(): Array<ItemStack>;
	getHolder(): InventoryHolder;
	removeItem(items: Array<ItemStack>): any;
	firstEmpty(): number;
	getItem(index: number): ItemStack;
	setItem(index: number, item: ItemStack): void;
	getStorageContents(): Array<ItemStack>;
	containsAtLeast(item: ItemStack, amount: number): boolean;
	setMaxStackSize(size: number): void;
	getViewers(): any;
	setStorageContents(items: Array<ItemStack>): void;
	addItem(items: Array<ItemStack>): any;
	spliterator(): any;
	forEach(arg0: any): void;
}

export class MerchantInventory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.MerchantInventory');
	}
}

