declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockState} from '../../../../org/bukkit/block/BlockState.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockFormEvent} from '../../../../org/bukkit/event/block/BlockFormEvent.js'

export interface EntityBlockFormEvent extends BlockFormEvent {
	getEntity(): Entity;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getNewState(): BlockState;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityBlockFormEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.EntityBlockFormEvent');
	}
	constructor(arg0: Entity, arg1: Block, arg2: BlockState) {
		return new EntityBlockFormEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Entity, arg1: Block, arg2: BlockState): EntityBlockFormEvent {
		return new EntityBlockFormEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return EntityBlockFormEvent.$javaClass.getHandlerList();
	}
}

