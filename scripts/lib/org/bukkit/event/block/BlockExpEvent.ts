declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockExpEvent extends BlockEvent {
	getHandlers(): HandlerList;
	getExpToDrop(): number;
	setExpToDrop(arg0: number): void;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockExpEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockExpEvent');
	}
	constructor(arg0: Block, arg1: number) {
		return new BlockExpEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Block, arg1: number): BlockExpEvent {
		return new BlockExpEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return BlockExpEvent.$javaClass.getHandlerList();
	}
}

