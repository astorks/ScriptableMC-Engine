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
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityResurrectEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityResurrectEvent');
	}
	constructor(arg0: LivingEntity) {
		return new EntityResurrectEvent.$javaClass(arg0);
	}
	public static new0(arg0: LivingEntity): EntityResurrectEvent {
		return new EntityResurrectEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return EntityResurrectEvent.$javaClass.getHandlerList();
	}
}

