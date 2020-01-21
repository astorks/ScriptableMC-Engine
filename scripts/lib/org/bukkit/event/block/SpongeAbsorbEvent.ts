declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface SpongeAbsorbEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getBlocks(): any;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class SpongeAbsorbEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.SpongeAbsorbEvent');
	}
	constructor(arg0: Block, arg1: any) {
		return new SpongeAbsorbEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Block, arg1: any): SpongeAbsorbEvent {
		return new SpongeAbsorbEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return SpongeAbsorbEvent.$javaClass.getHandlerList();
	}
}

