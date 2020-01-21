declare var Java: any;
import {Material} from '../../../org/bukkit/Material.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Location} from '../../../org/bukkit/Location.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {InventoryHolder} from '../../../org/bukkit/inventory/InventoryHolder.js'

export interface Inventory {
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
	getHolder(): InventoryHolder;
	firstEmpty(): number;
	getViewers(): any;
	containsAtLeast(item: ItemStack, amount: number): boolean;
	getMaxStackSize(): number;
	setItem(index: number, item: ItemStack): void;
	addItem(items: Array<ItemStack>): any;
	removeItem(items: Array<ItemStack>): any;
	setMaxStackSize(size: number): void;
	getContents(): Array<ItemStack>;
	getStorageContents(): Array<ItemStack>;
	getItem(index: number): ItemStack;
	setStorageContents(items: Array<ItemStack>): void;
	all(material: Material): any;
	all(item: ItemStack): any;
	setContents(items: Array<ItemStack>): void;
	spliterator(): any;
	forEach(arg0: any): void;
}

export class Inventory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.Inventory');
	}
}

