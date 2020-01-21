declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vector} from '../../../../org/bukkit/util/Vector.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockDispenseEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	setVelocity(arg0: Vector): void;
	getVelocity(): Vector;
	getItem(): ItemStack;
	setItem(arg0: ItemStack): void;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockDispenseEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockDispenseEvent');
	}
	constructor(arg0: Block, arg1: ItemStack, arg2: Vector) {
		return new BlockDispenseEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: ItemStack, arg2: Vector): BlockDispenseEvent {
		return new BlockDispenseEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return BlockDispenseEvent.$javaClass.getHandlerList();
	}
}

