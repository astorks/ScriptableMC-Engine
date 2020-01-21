declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface InventoryPickupItemEvent extends Event, Cancellable {
	getHandlers(): HandlerList;
	getItem(): Item;
	getInventory(): Inventory;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
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

