declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface InventoryEvent extends Event {
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class InventoryEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryEvent');
	}
	constructor(arg0: InventoryView) {
		return new InventoryEvent.$javaClass(arg0);
	}
	public static new0(arg0: InventoryView): InventoryEvent {
		return new InventoryEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return InventoryEvent.$javaClass.getHandlerList();
	}
}

