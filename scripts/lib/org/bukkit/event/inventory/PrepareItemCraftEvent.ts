declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {CraftingInventory} from '../../../../org/bukkit/inventory/CraftingInventory.js'
import {Recipe} from '../../../../org/bukkit/inventory/Recipe.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryEvent} from '../../../../org/bukkit/event/inventory/InventoryEvent.js'

export interface PrepareItemCraftEvent extends InventoryEvent {
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getInventory(): CraftingInventory;
	getRecipe(): Recipe;
	isRepair(): boolean;
	getViewers(): any;
	getView(): InventoryView;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PrepareItemCraftEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.PrepareItemCraftEvent');
	}
	constructor(arg0: CraftingInventory, arg1: InventoryView, arg2: boolean) {
		return new PrepareItemCraftEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: CraftingInventory, arg1: InventoryView, arg2: boolean): PrepareItemCraftEvent {
		return new PrepareItemCraftEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PrepareItemCraftEvent.$javaClass.getHandlerList();
	}
}

