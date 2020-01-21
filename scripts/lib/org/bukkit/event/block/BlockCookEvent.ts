declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockCookEvent extends BlockEvent, Cancellable {
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

export class BlockCookEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockCookEvent');
	}
	constructor(arg0: Block, arg1: ItemStack, arg2: ItemStack) {
		return new BlockCookEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: ItemStack, arg2: ItemStack): BlockCookEvent {
		return new BlockCookEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return BlockCookEvent.$javaClass.getHandlerList();
	}
}

