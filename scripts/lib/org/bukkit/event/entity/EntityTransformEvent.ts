declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityTransformEvent$TransformReason} from '../../../../org/bukkit/event/entity/EntityTransformEvent$TransformReason.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityTransformEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getTransformedEntity(): Entity;
	getTransformedEntities(): any;
	getTransformReason(): EntityTransformEvent$TransformReason;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityTransformEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTransformEvent');
	}
	constructor(arg0: Entity, arg1: any, arg2: EntityTransformEvent$TransformReason) {
		return new EntityTransformEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Entity, arg1: any, arg2: EntityTransformEvent$TransformReason): EntityTransformEvent {
		return new EntityTransformEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return EntityTransformEvent.$javaClass.getHandlerList();
	}
}

