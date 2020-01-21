declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {BlockData} from '../../../../org/bukkit/block/data/BlockData.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockPhysicsEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getSourceBlock(): Block;
	getChangedType(): Material;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockPhysicsEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPhysicsEvent');
	}
	constructor(arg0: Block, arg1: BlockData, arg2: Block) {
		return new BlockPhysicsEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: BlockData, arg2: Block): BlockPhysicsEvent {
		return new BlockPhysicsEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: Block, arg1: BlockData): BlockPhysicsEvent {
		return new BlockPhysicsEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return BlockPhysicsEvent.$javaClass.getHandlerList();
	}
}

