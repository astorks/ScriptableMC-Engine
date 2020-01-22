declare var Java: any;
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockPistonEvent extends BlockEvent, Cancellable {
	getDirection(): BlockFace;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
	isSticky(): boolean;
	getBlock(): Block;
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockPistonEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPistonEvent');
	}
	constructor(block: Block, direction: BlockFace);
	constructor(...args: any[]) {
		return new BlockPistonEvent.$javaClass(...args);
	}
}

