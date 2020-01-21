declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockPistonEvent} from '../../../../org/bukkit/event/block/BlockPistonEvent.js'

export interface BlockPistonRetractEvent extends BlockPistonEvent {
	getHandlers(): HandlerList;
	getBlocks(): any;
	getRetractLocation(): Location;
	getDirection(): BlockFace;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	isSticky(): boolean;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockPistonRetractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPistonRetractEvent');
	}
	constructor(arg0: Block, arg1: any, arg2: BlockFace) {
		return new BlockPistonRetractEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: any, arg2: BlockFace): BlockPistonRetractEvent {
		return new BlockPistonRetractEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return BlockPistonRetractEvent.$javaClass.getHandlerList();
	}
}

