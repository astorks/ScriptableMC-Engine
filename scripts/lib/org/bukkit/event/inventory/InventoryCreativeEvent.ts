declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {InventoryAction} from '../../../../org/bukkit/event/inventory/InventoryAction.js'
import {InventoryType$SlotType} from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {ClickType} from '../../../../org/bukkit/event/inventory/ClickType.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryClickEvent} from '../../../../org/bukkit/event/inventory/InventoryClickEvent.js'

export interface InventoryCreativeEvent extends InventoryClickEvent {
	getCursor(): ItemStack;
	setCursor(arg0: ItemStack): void;
	getSlot(): number;
	getHandlers(): HandlerList;
	getAction(): InventoryAction;
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
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class InventoryCreativeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryCreativeEvent');
	}
	constructor(arg0: InventoryView, arg1: InventoryType$SlotType, arg2: number, arg3: ItemStack) {
		return new InventoryCreativeEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: InventoryView, arg1: InventoryType$SlotType, arg2: number, arg3: ItemStack): InventoryCreativeEvent {
		return new InventoryCreativeEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static getHandlerList(): HandlerList {
		return InventoryCreativeEvent.$javaClass.getHandlerList();
	}
}

