declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {InventoryAction} from '../../../../org/bukkit/event/inventory/InventoryAction.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {InventoryType$SlotType} from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {ClickType} from '../../../../org/bukkit/event/inventory/ClickType.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryInteractEvent} from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js'

export interface InventoryClickEvent extends InventoryInteractEvent {
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
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class InventoryClickEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryClickEvent');
	}
	constructor(arg0: InventoryView, arg1: InventoryType$SlotType, arg2: number, arg3: ClickType, arg4: InventoryAction, arg5: number) {
		return new InventoryClickEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new0(arg0: InventoryView, arg1: InventoryType$SlotType, arg2: number, arg3: ClickType, arg4: InventoryAction, arg5: number): InventoryClickEvent {
		return new InventoryClickEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new1(arg0: InventoryView, arg1: InventoryType$SlotType, arg2: number, arg3: ClickType, arg4: InventoryAction): InventoryClickEvent {
		return new InventoryClickEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static getHandlerList(): HandlerList {
		return InventoryClickEvent.$javaClass.getHandlerList();
	}
}

