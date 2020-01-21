declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityTransformEvent$TransformReason} from '../../../../org/bukkit/event/entity/EntityTransformEvent$TransformReason.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityTransformEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getTransformReason(): EntityTransformEvent$TransformReason;
	getTransformedEntities(): any;
	getTransformedEntity(): Entity;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityTransformEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTransformEvent');
	}
	constructor(original: Entity, convertedList: any, transformReason: EntityTransformEvent$TransformReason);
	constructor(...args: any[]) {
		return new EntityTransformEvent.$javaClass(...args);
	}
}

