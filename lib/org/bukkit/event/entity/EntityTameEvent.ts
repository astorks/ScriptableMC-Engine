declare var Java: any;
import {AnimalTamer} from '../../../../org/bukkit/entity/AnimalTamer.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityTameEvent extends EntityEvent, Cancellable {
	getOwner(): AnimalTamer;
	getHandlers(): HandlerList;
	getEntity(): LivingEntity;
	getEntity(): Entity;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityTameEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTameEvent');
	}
	constructor(entity: LivingEntity, owner: AnimalTamer);
	constructor(...args: any[]) {
		return new EntityTameEvent.$javaClass(...args);
	}
}

