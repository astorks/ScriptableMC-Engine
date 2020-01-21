declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockCookEvent} from '../../../../org/bukkit/event/block/BlockCookEvent.js'

export interface FurnaceSmeltEvent extends BlockCookEvent {
	getResult(): ItemStack;
	setResult(arg0: ItemStack): void;
	getHandlers(): HandlerList;
	getSource(): ItemStack;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class FurnaceSmeltEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.FurnaceSmeltEvent');
	}
	constructor(arg0: Block, arg1: ItemStack, arg2: ItemStack) {
		return new FurnaceSmeltEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: ItemStack, arg2: ItemStack): FurnaceSmeltEvent {
		return new FurnaceSmeltEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return FurnaceSmeltEvent.$javaClass.getHandlerList();
	}
}

