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
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	isSticky(): boolean;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockPistonExtendEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPistonExtendEvent');
	}
	constructor(arg0: Block, arg1: any, arg2: BlockFace) {
		return new BlockPistonExtendEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: any, arg2: BlockFace): BlockPistonExtendEvent {
		return new BlockPistonExtendEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: Block, arg1: number, arg2: BlockFace): BlockPistonExtendEvent {
		return new BlockPistonExtendEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return BlockPistonExtendEvent.$javaClass.getHandlerList();
	}
}

