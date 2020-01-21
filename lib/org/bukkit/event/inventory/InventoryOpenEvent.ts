declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {InventoryEvent} from '../../../../org/bukkit/event/inventory/InventoryEvent.js'

export interface InventoryOpenEvent extends InventoryEvent, Cancellable {
	getHandlers(): HandlerList;
	getPlayer(): HumanEntity;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getViewers(): any;
	getInventory(): Inventory;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class InventoryOpenEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryOpenEvent');
	}
	constructor(transaction: InventoryView);
	constructor(...args: any[]) {
		return new InventoryOpenEvent.$javaClass(...args);
	}
}

