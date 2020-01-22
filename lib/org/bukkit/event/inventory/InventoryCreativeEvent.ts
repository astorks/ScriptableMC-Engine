declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {InventoryType$SlotType} from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js'
import {InventoryAction} from '../../../../org/bukkit/event/inventory/InventoryAction.js'
import {ClickType} from '../../../../org/bukkit/event/inventory/ClickType.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryClickEvent} from '../../../../org/bukkit/event/inventory/InventoryClickEvent.js'

export interface InventoryCreativeEvent extends InventoryClickEvent {
	getCursor(): ItemStack;
	setCursor(item: ItemStack): void;
	getSlot(): number;
	getHandlers(): HandlerList;
	getSlotType(): InventoryType$SlotType;
	isLeftClick(): boolean;
	getHotbarButton(): number;
	getAction(): InventoryAction;
	setCurrentItem(stack: ItemStack): void;
	isRightClick(): boolean;
	getCurrentItem(): ItemStack;
	isShiftClick(): boolean;
	getRawSlot(): number;
	getClick(): ClickType;
	getClickedInventory(): Inventory;
	setResult(newResult: Event$Result): void;
	getResult(): Event$Result;
	isCancelled(): boolean;
	setCancelled(toCancel: boolean): void;
	getWhoClicked(): HumanEntity;
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class InventoryCreativeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryCreativeEvent');
	}
	constructor(what: InventoryView, type: InventoryType$SlotType, slot: number, newItem: ItemStack);
	constructor(...args: any[]) {
		return new InventoryCreativeEvent.$javaClass(...args);
	}
}

