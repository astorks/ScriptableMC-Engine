declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockCookEvent extends BlockEvent, Cancellable {
	setResult(result: ItemStack): void;
	getResult(): ItemStack;
	getSource(): ItemStack;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockCookEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockCookEvent');
	}
	constructor(block: Block, source: ItemStack, result: ItemStack);
	constructor(...args: any[]) {
		return new BlockCookEvent.$javaClass(...args);
	}
}

