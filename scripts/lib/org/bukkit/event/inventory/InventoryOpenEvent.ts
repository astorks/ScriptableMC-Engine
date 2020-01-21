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
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class InventoryOpenEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryOpenEvent');
	}
	constructor(arg0: InventoryView) {
		return new InventoryOpenEvent.$javaClass(arg0);
	}
	public static new0(arg0: InventoryView): InventoryOpenEvent {
		return new InventoryOpenEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return InventoryOpenEvent.$javaClass.getHandlerList();
	}
}

