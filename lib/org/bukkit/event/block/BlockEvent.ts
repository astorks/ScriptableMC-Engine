declare var Java: any;
import {Block} from '../../../../org/bukkit/block/Block.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface BlockEvent extends Event {
	getBlock(): Block;
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockEvent');
	}
	constructor(theBlock: Block);
	constructor(...args: any[]) {
		return new BlockEvent.$javaClass(...args);
	}
}

