declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryType$SlotType} from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js'
import {ClickType} from '../../../../org/bukkit/event/inventory/ClickType.js'
import {InventoryAction} from '../../../../org/bukkit/event/inventory/InventoryAction.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryClickEvent} from '../../../../org/bukkit/event/inventory/InventoryClickEvent.js'

export interface InventoryCreativeEvent extends InventoryClickEvent {
	setCursor(item: ItemStack): void;
	getCursor(): ItemStack;
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
	getClick(): ClickType;
	getAction(): InventoryAction;
	getResult(): Event$Result;
	setResult(newResult: Event$Result): void;
	setCancelled(toCancel: boolean): void;
	isCancelled(): boolean;
	getWhoClicked(): HumanEntity;
	getViewers(): any;
	getInventory(): Inventory;
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

