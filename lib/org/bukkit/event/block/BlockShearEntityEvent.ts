declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockShearEntityEvent extends BlockEvent, Cancellable {
	getEntity(): Entity;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancelled: boolean): void;
	getTool(): ItemStack;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockShearEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockShearEntityEvent');
	}
	constructor(dispenser: Block, sheared: Entity, tool: ItemStack);
	constructor(...args: any[]) {
		return new BlockShearEntityEvent.$javaClass(...args);
	}
}

