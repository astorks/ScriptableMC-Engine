declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockRedstoneEvent extends BlockEvent {
	getHandlers(): HandlerList;
	getOldCurrent(): number;
	getNewCurrent(): number;
	setNewCurrent(arg0: number): void;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockRedstoneEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockRedstoneEvent');
	}
	constructor(arg0: Block, arg1: number, arg2: number) {
		return new BlockRedstoneEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: number, arg2: number): BlockRedstoneEvent {
		return new BlockRedstoneEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return BlockRedstoneEvent.$javaClass.getHandlerList();
	}
}

