declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'
import {InventoryHolder} from '../../../org/bukkit/inventory/InventoryHolder.js'
import {Material} from '../../../org/bukkit/Material.js'
import {Location} from '../../../org/bukkit/Location.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'

export interface PlayerInventory extends Inventory {
	getItemInHand(): ItemStack;
	setItemInHand(stack: ItemStack): void;
	getHolder(): HumanEntity;
	getHolder(): InventoryHolder;
	setItem(index: number, item: ItemStack): void;
	getLeggings(): ItemStack;
	getHeldItemSlot(): number;
	setArmorContents(items: Array<ItemStack>): void;
	setBoots(boots: ItemStack): void;
	setHelmet(helmet: ItemStack): void;
	getItemInMainHand(): ItemStack;
	getItemInOffHand(): ItemStack;
	setItemInOffHand(item: ItemStack): void;
	setHeldItemSlot(slot: number): void;
	setChestplate(chestplate: ItemStack): void;
	setLeggings(leggings: ItemStack): void;
	getExtraContents(): Array<ItemStack>;
	getArmorContents(): Array<ItemStack>;
	getBoots(): ItemStack;
	setExtraContents(items: Array<ItemStack>): void;
	setItemInMainHand(item: ItemStack): void;
	getHelmet(): ItemStack;
	getChestplate(): ItemStack;
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
	removeItem(items: Array<ItemStack>): any;
	firstEmpty(): number;
	getItem(index: number): ItemStack;
	getStorageContents(): Array<ItemStack>;
	containsAtLeast(item: ItemStack, amount: number): boolean;
	setMaxStackSize(size: number): void;
	getViewers(): any;
	setStorageContents(items: Array<ItemStack>): void;
	addItem(items: Array<ItemStack>): any;
	spliterator(): any;
	forEach(arg0: any): void;
}

export class PlayerInventory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.PlayerInventory');
	}
}

