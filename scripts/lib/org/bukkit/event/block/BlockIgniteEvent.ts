declare var Java: any;
import {BlockIgniteEvent$IgniteCause} from '../../../../org/bukkit/event/block/BlockIgniteEvent$IgniteCause.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockIgniteEvent extends BlockEvent, Cancellable {
	getCause(): BlockIgniteEvent$IgniteCause;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getIgnitingBlock(): Block;
	getIgnitingEntity(): Entity;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockIgniteEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockIgniteEvent');
	}
	constructor(arg0: Block, arg1: BlockIgniteEvent$IgniteCause, arg2: Block) {
		return new BlockIgniteEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: BlockIgniteEvent$IgniteCause, arg2: Block): BlockIgniteEvent {
		return new BlockIgniteEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: Block, arg1: BlockIgniteEvent$IgniteCause, arg2: Entity): BlockIgniteEvent {
		return new BlockIgniteEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new2(arg0: Block, arg1: BlockIgniteEvent$IgniteCause, arg2: Entity, arg3: Block): BlockIgniteEvent {
		return new BlockIgniteEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static getHandlerList(): HandlerList {
		return BlockIgniteEvent.$javaClass.getHandlerList();
	}
}

