declare var Java: any;
import {Block} from '../../../../org/bukkit/block/Block.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockState} from '../../../../org/bukkit/block/BlockState.js'
import {BlockFormEvent} from '../../../../org/bukkit/event/block/BlockFormEvent.js'

export interface BlockSpreadEvent extends BlockFormEvent {
	getSource(): Block;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getNewState(): BlockState;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockSpreadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockSpreadEvent');
	}
	constructor(block: Block, source: Block, newState: BlockState);
	constructor(...args: any[]) {
		return new BlockSpreadEvent.$javaClass(...args);
	}
}

