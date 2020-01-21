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
	setCursor(arg0: ItemStack): void;
	getRawSlots(): any;
	getOldCursor(): ItemStack;
	getNewItems(): any;
	getInventorySlots(): any;
	getResult(): Event$Result;
	setResult(arg0: Event$Result): void;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getWhoClicked(): HumanEntity;
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class InventoryDragEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryDragEvent');
	}
	constructor(arg0: InventoryView, arg1: ItemStack, arg2: ItemStack, arg3: boolean, arg4: any) {
		return new InventoryDragEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new0(arg0: InventoryView, arg1: ItemStack, arg2: ItemStack, arg3: boolean, arg4: any): InventoryDragEvent {
		return new InventoryDragEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static getHandlerList(): HandlerList {
		return InventoryDragEvent.$javaClass.getHandlerList();
	}
}

