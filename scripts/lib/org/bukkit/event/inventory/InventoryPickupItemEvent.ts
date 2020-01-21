declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface InventoryPickupItemEvent extends Event, Cancellable {
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getItem(): Item;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class InventoryPickupItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryPickupItemEvent');
	}
	constructor(arg0: Inventory, arg1: Item) {
		return new InventoryPickupItemEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Inventory, arg1: Item): InventoryPickupItemEvent {
		return new InventoryPickupItemEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return InventoryPickupItemEvent.$javaClass.getHandlerList();
	}
}

