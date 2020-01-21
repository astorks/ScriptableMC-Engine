declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockState} from '../../../../org/bukkit/block/BlockState.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockGrowEvent} from '../../../../org/bukkit/event/block/BlockGrowEvent.js'

export interface BlockFormEvent extends BlockGrowEvent {
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getNewState(): BlockState;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockFormEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockFormEvent');
	}
	constructor(block: Block, newState: BlockState);
	constructor(...args: any[]) {
		return new BlockFormEvent.$javaClass(...args);
	}
}

