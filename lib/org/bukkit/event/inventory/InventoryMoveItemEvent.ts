declare var Java: any;
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface InventoryMoveItemEvent extends Event, Cancellable {
	getSource(): Inventory;
	getItem(): ItemStack;
	setItem(itemStack: ItemStack): void;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getDestination(): Inventory;
	getInitiator(): Inventory;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class InventoryMoveItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryMoveItemEvent');
	}
	constructor(sourceInventory: Inventory, itemStack: ItemStack, destinationInventory: Inventory, didSourceInitiate: boolean);
	constructor(...args: any[]) {
		return new InventoryMoveItemEvent.$javaClass(...args);
	}
}

