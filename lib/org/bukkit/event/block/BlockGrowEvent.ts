declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockState} from '../../../../org/bukkit/block/BlockState.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockGrowEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getNewState(): BlockState;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockGrowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockGrowEvent');
	}
	constructor(block: Block, newState: BlockState);
	constructor(...args: any[]) {
		return new BlockGrowEvent.$javaClass(...args);
	}
}

