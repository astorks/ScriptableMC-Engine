declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {MerchantInventory} from '../../../../org/bukkit/inventory/MerchantInventory.js'
import {Merchant} from '../../../../org/bukkit/inventory/Merchant.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryInteractEvent} from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js'

export interface TradeSelectEvent extends InventoryInteractEvent {
	getIndex(): number;
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getInventory(): MerchantInventory;
	getMerchant(): Merchant;
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

export class TradeSelectEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.TradeSelectEvent');
	}
	constructor(arg0: InventoryView, arg1: number) {
		return new TradeSelectEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: InventoryView, arg1: number): TradeSelectEvent {
		return new TradeSelectEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return TradeSelectEvent.$javaClass.getHandlerList();
	}
}

