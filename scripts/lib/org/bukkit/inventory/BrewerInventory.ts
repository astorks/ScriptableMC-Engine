declare var Java: any;
import {BrewingStand} from '../../../org/bukkit/block/BrewingStand.js'
import {InventoryHolder} from '../../../org/bukkit/inventory/InventoryHolder.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Material} from '../../../org/bukkit/Material.js'
import {Location} from '../../../org/bukkit/Location.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'

export interface BrewerInventory extends Inventory {
	getHolder(): BrewingStand;
	getHolder(): InventoryHolder;
	setIngredient(arg0: ItemStack): void;
	getIngredient(): ItemStack;
	setFuel(arg0: ItemStack): void;
	getFuel(): ItemStack;
	remove(arg0: Material): void;
	remove(arg0: ItemStack): void;
	clear(): void;
	clear(arg0: number): void;
	contains(arg0: Material): boolean;
	contains(arg0: ItemStack, arg1: number): boolean;
	contains(arg0: Material, arg1: number): boolean;
	contains(arg0: ItemStack): boolean;
	iterator(): any;
	iterator(): any;
	iterator(arg0: number): any;
	first(arg0: ItemStack): number;
	first(arg0: Material): number;
	getLocation(): Location;
	getType(): InventoryType;
	getSize(): number;
	all(arg0: Material): any;
	all(arg0: ItemStack): any;
	getMaxStackSize(): number;
	removeItem(arg0: Array<ItemStack>): any;
	getViewers(): any;
	addItem(arg0: Array<ItemStack>): any;
	getItem(arg0: number): ItemStack;
	getStorageContents(): Array<ItemStack>;
	setMaxStackSize(arg0: number): void;
	setStorageContents(arg0: Array<ItemStack>): void;
	containsAtLeast(arg0: ItemStack, arg1: number): boolean;
	getContents(): Array<ItemStack>;
	firstEmpty(): number;
	setItem(arg0: number, arg1: ItemStack): void;
	setContents(arg0: Array<ItemStack>): void;
	spliterator(): any;
	forEach(arg0: any): void;
}

export class BrewerInventory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.BrewerInventory');
	}
}

