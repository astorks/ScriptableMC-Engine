declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockFromToEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getFace(): BlockFace;
	getToBlock(): Block;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockFromToEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockFromToEvent');
	}
	constructor(arg0: Block, arg1: Block) {
		return new BlockFromToEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Block, arg1: Block): BlockFromToEvent {
		return new BlockFromToEvent.$javaClass(arg0, arg1);
	}
	public static new1(arg0: Block, arg1: BlockFace): BlockFromToEvent {
		return new BlockFromToEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return BlockFromToEvent.$javaClass.getHandlerList();
	}
}

