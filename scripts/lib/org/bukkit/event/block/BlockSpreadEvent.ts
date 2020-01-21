declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockState} from '../../../../org/bukkit/block/BlockState.js'
import {BlockFormEvent} from '../../../../org/bukkit/event/block/BlockFormEvent.js'

export interface BlockSpreadEvent extends BlockFormEvent {
	getHandlers(): HandlerList;
	getSource(): Block;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getNewState(): BlockState;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockSpreadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockSpreadEvent');
	}
	constructor(arg0: Block, arg1: Block, arg2: BlockState) {
		return new BlockSpreadEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: Block, arg2: BlockState): BlockSpreadEvent {
		return new BlockSpreadEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return BlockSpreadEvent.$javaClass.getHandlerList();
	}
}

