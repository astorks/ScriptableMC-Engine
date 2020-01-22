declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockPistonEvent} from '../../../../org/bukkit/event/block/BlockPistonEvent.js'

export interface BlockPistonRetractEvent extends BlockPistonEvent {
	getHandlers(): HandlerList;
	getRetractLocation(): Location;
	getBlocks(): any;
	getDirection(): BlockFace;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
	isSticky(): boolean;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockPistonRetractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPistonRetractEvent');
	}
	constructor(block: Block, blocks: any, direction: BlockFace);
	constructor(...args: any[]) {
		return new BlockPistonRetractEvent.$javaClass(...args);
	}
}

