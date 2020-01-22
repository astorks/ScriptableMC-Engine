declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {AnvilInventory} from '../../../../org/bukkit/inventory/AnvilInventory.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryEvent} from '../../../../org/bukkit/event/inventory/InventoryEvent.js'

export interface PrepareAnvilEvent extends InventoryEvent {
	setResult(result: ItemStack): void;
	getResult(): ItemStack;
	getInventory(): Inventory;
	getInventory(): AnvilInventory;
	getHandlers(): HandlerList;
	getViewers(): any;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PrepareAnvilEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.PrepareAnvilEvent');
	}
	constructor(inventory: InventoryView, result: ItemStack);
	constructor(...args: any[]) {
		return new PrepareAnvilEvent.$javaClass(...args);
	}
}

