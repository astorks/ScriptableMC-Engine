declare var Java: any;
import {CraftingInventory} from '../../../../org/bukkit/inventory/CraftingInventory.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {Recipe} from '../../../../org/bukkit/inventory/Recipe.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {InventoryAction} from '../../../../org/bukkit/event/inventory/InventoryAction.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {InventoryType$SlotType} from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js'
import {ClickType} from '../../../../org/bukkit/event/inventory/ClickType.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryClickEvent} from '../../../../org/bukkit/event/inventory/InventoryClickEvent.js'

export interface CraftItemEvent extends InventoryClickEvent {
	getInventory(): CraftingInventory;
	getInventory(): Inventory;
	getRecipe(): Recipe;
	getSlot(): number;
	getHandlers(): HandlerList;
	getAction(): InventoryAction;
	getCursor(): ItemStack;
	setCursor(arg0: ItemStack): void;
	getSlotType(): InventoryType$SlotType;
	getClickedInventory(): Inventory;
	getHotbarButton(): number;
	isLeftClick(): boolean;
	isRightClick(): boolean;
	getRawSlot(): number;
	getClick(): ClickType;
	setCurrentItem(arg0: ItemStack): void;
	getCurrentItem(): ItemStack;
	isShiftClick(): boolean;
	getResult(): Event$Result;
	setResult(arg0: Event$Result): void;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getWhoClicked(): HumanEntity;
	getViewers(): any;
	getView(): InventoryView;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class CraftItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.CraftItemEvent');
	}
	constructor(arg0: Recipe, arg1: InventoryView, arg2: InventoryType$SlotType, arg3: number, arg4: ClickType, arg5: InventoryAction) {
		return new CraftItemEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new0(arg0: Recipe, arg1: InventoryView, arg2: InventoryType$SlotType, arg3: number, arg4: ClickType, arg5: InventoryAction): CraftItemEvent {
		return new CraftItemEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new1(arg0: Recipe, arg1: InventoryView, arg2: InventoryType$SlotType, arg3: number, arg4: ClickType, arg5: InventoryAction, arg6: number): CraftItemEvent {
		return new CraftItemEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
	}
	public static getHandlerList(): HandlerList {
		return CraftItemEvent.$javaClass.getHandlerList();
	}
}

