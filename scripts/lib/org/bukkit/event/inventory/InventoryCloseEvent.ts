declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryEvent} from '../../../../org/bukkit/event/inventory/InventoryEvent.js'

export interface InventoryCloseEvent extends InventoryEvent {
	getHandlers(): HandlerList;
	getPlayer(): HumanEntity;
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class InventoryCloseEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryCloseEvent');
	}
	constructor(arg0: InventoryView) {
		return new InventoryCloseEvent.$javaClass(arg0);
	}
	public static new0(arg0: InventoryView): InventoryCloseEvent {
		return new InventoryCloseEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return InventoryCloseEvent.$javaClass.getHandlerList();
	}
}

