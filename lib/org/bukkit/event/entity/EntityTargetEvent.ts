declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityTargetEvent$TargetReason} from '../../../../org/bukkit/event/entity/EntityTargetEvent$TargetReason.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityTargetEvent extends EntityEvent, Cancellable {
	getTarget(): Entity;
	setTarget(target: Entity): void;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getReason(): EntityTargetEvent$TargetReason;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityTargetEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTargetEvent');
	}
	constructor(entity: Entity, target: Entity, reason: EntityTargetEvent$TargetReason);
	constructor(...args: any[]) {
		return new EntityTargetEvent.$javaClass(...args);
	}
}

