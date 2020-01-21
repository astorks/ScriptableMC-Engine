declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockBurnEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getIgnitingBlock(): Block;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockBurnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockBurnEvent');
	}
	constructor(block: Block, ignitingBlock: Block);
	constructor(block: Block);
	constructor(...args: any[]) {
		return new BlockBurnEvent.$javaClass(...args);
	}
}

