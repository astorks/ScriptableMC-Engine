declare var Java: any;
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryEvent} from '../../../../org/bukkit/event/inventory/InventoryEvent.js'

export interface InventoryCloseEvent extends InventoryEvent {
	getPlayer(): HumanEntity;
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class InventoryCloseEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryCloseEvent');
	}
	constructor(transaction: InventoryView);
	constructor(...args: any[]) {
		return new InventoryCloseEvent.$javaClass(...args);
	}
}

