declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockShearEntityEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getTool(): ItemStack;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockShearEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockShearEntityEvent');
	}
	constructor(arg0: Block, arg1: Entity, arg2: ItemStack) {
		return new BlockShearEntityEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: Entity, arg2: ItemStack): BlockShearEntityEvent {
		return new BlockShearEntityEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return BlockShearEntityEvent.$javaClass.getHandlerList();
	}
}

