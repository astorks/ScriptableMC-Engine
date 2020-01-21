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
	setResult(arg0: Event$Result): void;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getWhoClicked(): HumanEntity;
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class InventoryInteractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryInteractEvent');
	}
	constructor(arg0: InventoryView) {
		return new InventoryInteractEvent.$javaClass(arg0);
	}
	public static new0(arg0: InventoryView): InventoryInteractEvent {
		return new InventoryInteractEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return InventoryInteractEvent.$javaClass.getHandlerList();
	}
}

