declare var Java: any;
import {DragType} from '../../../../org/bukkit/event/inventory/DragType.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryInteractEvent} from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js'

export interface InventoryDragEvent extends InventoryInteractEvent {
	getType(): DragType;
	getHandlers(): HandlerList;
	getCursor(): ItemStack;
	setCursor(newCursor: ItemStack): void;
	getNewItems(): any;
	getInventorySlots(): any;
	getOldCursor(): ItemStack;
	getRawSlots(): any;
	setResult(newResult: Event$Result): void;
	getResult(): Event$Result;
	isCancelled(): boolean;
	setCancelled(toCancel: boolean): void;
	getWhoClicked(): HumanEntity;
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class InventoryDragEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryDragEvent');
	}
	constructor(what: InventoryView, newCursor: ItemStack, oldCursor: ItemStack, right: boolean, slots: any);
	constructor(...args: any[]) {
		return new InventoryDragEvent.$javaClass(...args);
	}
}

