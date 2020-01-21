declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockData} from '../../../../org/bukkit/block/data/BlockData.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface FluidLevelChangeEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getNewData(): BlockData;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	setNewData(arg0: BlockData): void;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class FluidLevelChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.FluidLevelChangeEvent');
	}
	constructor(arg0: Block, arg1: BlockData) {
		return new FluidLevelChangeEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Block, arg1: BlockData): FluidLevelChangeEvent {
		return new FluidLevelChangeEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return FluidLevelChangeEvent.$javaClass.getHandlerList();
	}
}

