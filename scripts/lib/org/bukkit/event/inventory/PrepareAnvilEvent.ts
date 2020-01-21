declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {AnvilInventory} from '../../../../org/bukkit/inventory/AnvilInventory.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryEvent} from '../../../../org/bukkit/event/inventory/InventoryEvent.js'

export interface PrepareAnvilEvent extends InventoryEvent {
	getResult(): ItemStack;
	setResult(arg0: ItemStack): void;
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getInventory(): AnvilInventory;
	getViewers(): any;
	getView(): InventoryView;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PrepareAnvilEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.PrepareAnvilEvent');
	}
	constructor(arg0: InventoryView, arg1: ItemStack) {
		return new PrepareAnvilEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: InventoryView, arg1: ItemStack): PrepareAnvilEvent {
		return new PrepareAnvilEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PrepareAnvilEvent.$javaClass.getHandlerList();
	}
}

