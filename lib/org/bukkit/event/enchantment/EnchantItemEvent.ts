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
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getEnchanter(): Player;
	getEnchantBlock(): Block;
	getExpLevelCost(): number;
	setExpLevelCost(level: number): void;
	getEnchantsToAdd(): any;
	whichButton(): number;
	getViewers(): any;
	getInventory(): Inventory;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EnchantItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.enchantment.EnchantItemEvent');
	}
	constructor(enchanter: Player, view: InventoryView, table: Block, item: ItemStack, level: number, enchants: any, i: number);
	constructor(...args: any[]) {
		return new EnchantItemEvent.$javaClass(...args);
	}
}

