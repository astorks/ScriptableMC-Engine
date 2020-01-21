declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface InventoryEvent extends Event {
	getHandlers(): HandlerList;
	getViewers(): any;
	getInventory(): Inventory;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class InventoryEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryEvent');
	}
	constructor(transaction: InventoryView);
	constructor(...args: any[]) {
		return new InventoryEvent.$javaClass(...args);
	}
}

