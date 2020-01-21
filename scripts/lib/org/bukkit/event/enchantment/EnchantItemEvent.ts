declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {InventoryEvent} from '../../../../org/bukkit/event/inventory/InventoryEvent.js'

export interface EnchantItemEvent extends InventoryEvent, Cancellable {
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEnchantsToAdd(): any;
	getExpLevelCost(): number;
	getEnchanter(): Player;
	setExpLevelCost(arg0: number): void;
	getEnchantBlock(): Block;
	whichButton(): number;
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EnchantItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.enchantment.EnchantItemEvent');
	}
	constructor(arg0: Player, arg1: InventoryView, arg2: Block, arg3: ItemStack, arg4: number, arg5: any, arg6: number) {
		return new EnchantItemEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
	}
	public static new0(arg0: Player, arg1: InventoryView, arg2: Block, arg3: ItemStack, arg4: number, arg5: any, arg6: number): EnchantItemEvent {
		return new EnchantItemEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
	}
	public static getHandlerList(): HandlerList {
		return EnchantItemEvent.$javaClass.getHandlerList();
	}
}

