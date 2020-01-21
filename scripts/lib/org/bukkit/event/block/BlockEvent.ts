declare var Java: any;
import {Block} from '../../../../org/bukkit/block/Block.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface BlockEvent extends Event {
	getBlock(): Block;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockEvent');
	}
	constructor(arg0: Block) {
		return new BlockEvent.$javaClass(arg0);
	}
	public static new0(arg0: Block): BlockEvent {
		return new BlockEvent.$javaClass(arg0);
	}
}

