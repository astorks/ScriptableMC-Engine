declare var Java: any;
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {InventoryEvent} from '../../../../org/bukkit/event/inventory/InventoryEvent.js'

export interface InventoryInteractEvent extends InventoryEvent, Cancellable {
	setResult(newResult: Event$Result): void;
	getResult(): Event$Result;
	isCancelled(): boolean;
	setCancelled(toCancel: boolean): void;
	getWhoClicked(): HumanEntity;
	getInventory(): Inventory;
	getViewers(): any;
	getHandlers(): HandlerList;
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

