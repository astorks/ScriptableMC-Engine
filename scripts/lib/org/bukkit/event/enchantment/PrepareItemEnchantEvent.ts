declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {EnchantmentOffer} from '../../../../org/bukkit/enchantments/EnchantmentOffer.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {InventoryEvent} from '../../../../org/bukkit/event/inventory/InventoryEvent.js'

export interface PrepareItemEnchantEvent extends InventoryEvent, Cancellable {
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getExpLevelCostsOffered(): Array<number>;
	getEnchantmentBonus(): number;
	getEnchanter(): Player;
	getEnchantBlock(): Block;
	getOffers(): Array<EnchantmentOffer>;
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PrepareItemEnchantEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.enchantment.PrepareItemEnchantEvent');
	}
	constructor(arg0: Player, arg1: InventoryView, arg2: Block, arg3: ItemStack, arg4: Array<EnchantmentOffer>, arg5: number) {
		return new PrepareItemEnchantEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new0(arg0: Player, arg1: InventoryView, arg2: Block, arg3: ItemStack, arg4: Array<EnchantmentOffer>, arg5: number): PrepareItemEnchantEvent {
		return new PrepareItemEnchantEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static getHandlerList(): HandlerList {
		return PrepareItemEnchantEvent.$javaClass.getHandlerList();
	}
}

