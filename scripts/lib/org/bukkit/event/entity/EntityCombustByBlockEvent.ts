declare var Java: any;
import {Block} from '../../../../org/bukkit/block/Block.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityCombustEvent} from '../../../../org/bukkit/event/entity/EntityCombustEvent.js'

export interface EntityCombustByBlockEvent extends EntityCombustEvent {
	getCombuster(): Block;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getDuration(): number;
	setDuration(arg0: number): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityCombustByBlockEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityCombustByBlockEvent');
	}
	constructor(arg0: Block, arg1: Entity, arg2: number) {
		return new EntityCombustByBlockEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: Entity, arg2: number): EntityCombustByBlockEvent {
		return new EntityCombustByBlockEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return EntityCombustByBlockEvent.$javaClass.getHandlerList();
	}
}

