declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockBurnEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getIgnitingBlock(): Block;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockBurnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockBurnEvent');
	}
	constructor(arg0: Block, arg1: Block) {
		return new BlockBurnEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Block, arg1: Block): BlockBurnEvent {
		return new BlockBurnEvent.$javaClass(arg0, arg1);
	}
	public static new1(arg0: Block): BlockBurnEvent {
		return new BlockBurnEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return BlockBurnEvent.$javaClass.getHandlerList();
	}
}

