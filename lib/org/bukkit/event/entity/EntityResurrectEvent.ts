declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityResurrectEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): LivingEntity;
	setCancelled(cancelled: boolean): void;
	isCancelled(): boolean;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityResurrectEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityResurrectEvent');
	}
	constructor(what: LivingEntity);
	constructor(...args: any[]) {
		return new EntityResurrectEvent.$javaClass(...args);
	}
}

