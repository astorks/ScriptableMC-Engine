declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface InventoryMoveItemEvent extends Event, Cancellable {
	getHandlers(): HandlerList;
	getSource(): Inventory;
	getItem(): ItemStack;
	setItem(arg0: ItemStack): void;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getInitiator(): Inventory;
	getDestination(): Inventory;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class InventoryMoveItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryMoveItemEvent');
	}
	constructor(arg0: Inventory, arg1: ItemStack, arg2: Inventory, arg3: boolean) {
		return new InventoryMoveItemEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: Inventory, arg1: ItemStack, arg2: Inventory, arg3: boolean): InventoryMoveItemEvent {
		return new InventoryMoveItemEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static getHandlerList(): HandlerList {
		return InventoryMoveItemEvent.$javaClass.getHandlerList();
	}
}

