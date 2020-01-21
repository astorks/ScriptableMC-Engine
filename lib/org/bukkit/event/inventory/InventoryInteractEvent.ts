declare var Java: any;
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {InventoryEvent} from '../../../../org/bukkit/event/inventory/InventoryEvent.js'

export interface InventoryInteractEvent extends InventoryEvent, Cancellable {
	getResult(): Event$Result;
	setResult(newResult: Event$Result): void;
	setCancelled(toCancel: boolean): void;
	isCancelled(): boolean;
	getWhoClicked(): HumanEntity;
	getHandlers(): HandlerList;
	getViewers(): any;
	getInventory(): Inventory;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class InventoryInteractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryInteractEvent');
	}
	constructor(transaction: InventoryView);
	constructor(...args: any[]) {
		return new InventoryInteractEvent.$javaClass(...args);
	}
}

