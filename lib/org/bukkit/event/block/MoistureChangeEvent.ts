declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockState} from '../../../../org/bukkit/block/BlockState.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface MoistureChangeEvent extends BlockEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getNewState(): BlockState;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class MoistureChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.MoistureChangeEvent');
	}
	constructor(block: Block, newState: BlockState);
	constructor(...args: any[]) {
		return new MoistureChangeEvent.$javaClass(...args);
	}
}

