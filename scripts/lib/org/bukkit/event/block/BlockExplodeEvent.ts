declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockExplodeEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	blockList(): any;
	getYield(): number;
	setYield(arg0: number): void;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockExplodeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockExplodeEvent');
	}
	constructor(arg0: Block, arg1: any, arg2: number) {
		return new BlockExplodeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: any, arg2: number): BlockExplodeEvent {
		return new BlockExplodeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return BlockExplodeEvent.$javaClass.getHandlerList();
	}
}

