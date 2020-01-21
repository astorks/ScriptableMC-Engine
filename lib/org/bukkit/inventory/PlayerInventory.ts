declare var Java: any;
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'
import {InventoryHolder} from '../../../org/bukkit/inventory/InventoryHolder.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Material} from '../../../org/bukkit/Material.js'
import {Location} from '../../../org/bukkit/Location.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'

export interface PlayerInventory extends Inventory {
	getHolder(): HumanEntity;
	getHolder(): InventoryHolder;
	setItemInHand(stack: ItemStack): void;
	getItemInHand(): ItemStack;
	setItem(index: number, item: ItemStack): void;
	getHeldItemSlot(): number;
	setExtraContents(items: Array<ItemStack>): void;
	setHeldItemSlot(slot: number): void;
	getExtraContents(): Array<ItemStack>;
	setItemInMainHand(item: ItemStack): void;
	setHelmet(helmet: ItemStack): void;
	getItemInMainHand(): ItemStack;
	setLeggings(leggings: ItemStack): void;
	getChestplate(): ItemStack;
	getArmorContents(): Array<ItemStack>;
	setBoots(boots: ItemStack): void;
	getLeggings(): ItemStack;
	getBoots(): ItemStack;
	getItemInOffHand(): ItemStack;
	getHelmet(): ItemStack;
	setChestplate(chestplate: ItemStack): void;
	setArmorContents(items: Array<ItemStack>): void;
	setItemInOffHand(item: ItemStack): void;
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
	firstEmpty(): number;
	getViewers(): any;
	containsAtLeast(item: ItemStack, amount: number): boolean;
	getMaxStackSize(): number;
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

export class PlayerInventory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.PlayerInventory');
	}
}

