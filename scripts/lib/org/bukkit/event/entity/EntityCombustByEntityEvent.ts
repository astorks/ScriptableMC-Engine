declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityCombustEvent} from '../../../../org/bukkit/event/entity/EntityCombustEvent.js'

export interface EntityCombustByEntityEvent extends EntityCombustEvent {
	getCombuster(): Entity;
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

export class EntityCombustByEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityCombustByEntityEvent');
	}
	constructor(arg0: Entity, arg1: Entity, arg2: number) {
		return new EntityCombustByEntityEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Entity, arg1: Entity, arg2: number): EntityCombustByEntityEvent {
		return new EntityCombustByEntityEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return EntityCombustByEntityEvent.$javaClass.getHandlerList();
	}
}

