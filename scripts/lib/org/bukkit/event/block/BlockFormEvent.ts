declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockState} from '../../../../org/bukkit/block/BlockState.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockGrowEvent} from '../../../../org/bukkit/event/block/BlockGrowEvent.js'

export interface BlockFormEvent extends BlockGrowEvent {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getNewState(): BlockState;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockFormEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockFormEvent');
	}
	constructor(arg0: Block, arg1: BlockState) {
		return new BlockFormEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Block, arg1: BlockState): BlockFormEvent {
		return new BlockFormEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return BlockFormEvent.$javaClass.getHandlerList();
	}
}

