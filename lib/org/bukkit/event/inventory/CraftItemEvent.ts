declare var Java: any;
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {CraftingInventory} from '../../../../org/bukkit/inventory/CraftingInventory.js'
import {Recipe} from '../../../../org/bukkit/inventory/Recipe.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {InventoryType$SlotType} from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js'
import {ClickType} from '../../../../org/bukkit/event/inventory/ClickType.js'
import {InventoryAction} from '../../../../org/bukkit/event/inventory/InventoryAction.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryClickEvent} from '../../../../org/bukkit/event/inventory/InventoryClickEvent.js'

export interface CraftItemEvent extends InventoryClickEvent {
	getInventory(): Inventory;
	getInventory(): CraftingInventory;
	getRecipe(): Recipe;
	getSlot(): number;
	getHandlers(): HandlerList;
	isShiftClick(): boolean;
	setCurrentItem(stack: ItemStack): void;
	getRawSlot(): number;
	getHotbarButton(): number;
	getCurrentItem(): ItemStack;
	isRightClick(): boolean;
	isLeftClick(): boolean;
	getClickedInventory(): Inventory;
	getSlotType(): InventoryType$SlotType;
	setCursor(stack: ItemStack): void;
	getCursor(): ItemStack;
	getClick(): ClickType;
	getAction(): InventoryAction;
	getResult(): Event$Result;
	setResult(newResult: Event$Result): void;
	setCancelled(toCancel: boolean): void;
	isCancelled(): boolean;
	getWhoClicked(): HumanEntity;
	getViewers(): any;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class CraftItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.CraftItemEvent');
	}
	constructor(recipe: Recipe, what: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction);
	constructor(recipe: Recipe, what: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction, key: number);
	constructor(...args: any[]) {
		return new CraftItemEvent.$javaClass(...args);
	}
}

