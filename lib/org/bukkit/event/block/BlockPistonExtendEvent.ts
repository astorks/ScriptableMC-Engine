declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockPistonEvent} from '../../../../org/bukkit/event/block/BlockPistonEvent.js'

export interface BlockPistonExtendEvent extends BlockPistonEvent {
	getLength(): number;
	getHandlers(): HandlerList;
	getBlocks(): any;
	getDirection(): BlockFace;
	setCancelled(cancelled: boolean): void;
	isCancelled(): boolean;
	isSticky(): boolean;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockPistonExtendEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPistonExtendEvent');
	}
	constructor(block: Block, blocks: any, direction: BlockFace);
	constructor(block: Block, length: number, direction: BlockFace);
	constructor(...args: any[]) {
		return new BlockPistonExtendEvent.$javaClass(...args);
	}
}

