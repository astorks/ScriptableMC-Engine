declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface InventoryMoveItemEvent extends Event, Cancellable {
	getHandlers(): HandlerList;
	getSource(): Inventory;
	setItem(itemStack: ItemStack): void;
	getItem(): ItemStack;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
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

