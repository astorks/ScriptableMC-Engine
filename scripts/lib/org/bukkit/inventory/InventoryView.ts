declare var Java: any;
import {InventoryView$Property} from '../../../org/bukkit/inventory/InventoryView$Property.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {InventoryType$SlotType} from '../../../org/bukkit/event/inventory/InventoryType$SlotType.js'

export interface InventoryView {
	setProperty(arg0: InventoryView$Property, arg1: number): boolean;
	close(): void;
	getType(): InventoryType;
	getPlayer(): HumanEntity;
	getInventory(arg0: number): Inventory;
	getItem(arg0: number): ItemStack;
	setItem(arg0: number, arg1: ItemStack): void;
	getTitle(): string;
	countSlots(): number;
	getTopInventory(): Inventory;
	getCursor(): ItemStack;
	setCursor(arg0: ItemStack): void;
	convertSlot(arg0: number): number;
	getBottomInventory(): Inventory;
	getSlotType(arg0: number): InventoryType$SlotType;
}

export class InventoryView {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.InventoryView');
	}
	constructor() {
		return new InventoryView.$javaClass();
	}
	public static new0(): InventoryView {
		return new InventoryView.$javaClass();
	}
}

