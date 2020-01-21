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
	getIgnitingBlock(): Block;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getIgnitingEntity(): Entity;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockIgniteEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockIgniteEvent');
	}
	constructor(theBlock: Block, cause: BlockIgniteEvent$IgniteCause, ignitingBlock: Block);
	constructor(theBlock: Block, cause: BlockIgniteEvent$IgniteCause, ignitingEntity: Entity);
	constructor(theBlock: Block, cause: BlockIgniteEvent$IgniteCause, ignitingEntity: Entity, ignitingBlock: Block);
	constructor(...args: any[]) {
		return new BlockIgniteEvent.$javaClass(...args);
	}
}

