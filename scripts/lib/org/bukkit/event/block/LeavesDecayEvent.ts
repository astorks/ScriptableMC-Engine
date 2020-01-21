declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface LeavesDecayEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class LeavesDecayEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.LeavesDecayEvent');
	}
	constructor(arg0: Block) {
		return new LeavesDecayEvent.$javaClass(arg0);
	}
	public static new0(arg0: Block): LeavesDecayEvent {
		return new LeavesDecayEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return LeavesDecayEvent.$javaClass.getHandlerList();
	}
}

