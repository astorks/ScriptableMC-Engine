declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vector} from '../../../../org/bukkit/util/Vector.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockDispenseEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getVelocity(): Vector;
	setVelocity(vel: Vector): void;
	setItem(item: ItemStack): void;
	getItem(): ItemStack;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockDispenseEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockDispenseEvent');
	}
	constructor(block: Block, dispensed: ItemStack, velocity: Vector);
	constructor(...args: any[]) {
		return new BlockDispenseEvent.$javaClass(...args);
	}
}

