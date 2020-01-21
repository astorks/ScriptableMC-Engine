declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockData} from '../../../../org/bukkit/block/data/BlockData.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockPhysicsEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getChangedType(): Material;
	getSourceBlock(): Block;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockPhysicsEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPhysicsEvent');
	}
	constructor(block: Block, changed: BlockData, sourceBlock: Block);
	constructor(block: Block, changed: BlockData);
	constructor(...args: any[]) {
		return new BlockPhysicsEvent.$javaClass(...args);
	}
}

