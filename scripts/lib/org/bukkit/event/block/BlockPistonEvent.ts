declare var Java: any;
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockPistonEvent extends BlockEvent, Cancellable {
	getDirection(): BlockFace;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	isSticky(): boolean;
	getBlock(): Block;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockPistonEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPistonEvent');
	}
	constructor(arg0: Block, arg1: BlockFace) {
		return new BlockPistonEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Block, arg1: BlockFace): BlockPistonEvent {
		return new BlockPistonEvent.$javaClass(arg0, arg1);
	}
}

