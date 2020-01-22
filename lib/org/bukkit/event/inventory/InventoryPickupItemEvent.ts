declare var Java: any;
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface InventoryPickupItemEvent extends Event, Cancellable {
	getInventory(): Inventory;
	getItem(): Item;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class InventoryPickupItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryPickupItemEvent');
	}
	constructor(inventory: Inventory, item: Item);
	constructor(...args: any[]) {
		return new InventoryPickupItemEvent.$javaClass(...args);
	}
}

