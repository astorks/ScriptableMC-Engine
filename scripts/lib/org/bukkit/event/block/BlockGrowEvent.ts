declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockState} from '../../../../org/bukkit/block/BlockState.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockGrowEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getNewState(): BlockState;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockGrowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockGrowEvent');
	}
	constructor(arg0: Block, arg1: BlockState) {
		return new BlockGrowEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Block, arg1: BlockState): BlockGrowEvent {
		return new BlockGrowEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return BlockGrowEvent.$javaClass.getHandlerList();
	}
}

