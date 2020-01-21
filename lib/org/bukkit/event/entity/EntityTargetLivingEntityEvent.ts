declare var Java: any;
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityTargetEvent$TargetReason} from '../../../../org/bukkit/event/entity/EntityTargetEvent$TargetReason.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityTargetEvent} from '../../../../org/bukkit/event/entity/EntityTargetEvent.js'

export interface EntityTargetLivingEntityEvent extends EntityTargetEvent {
	getTarget(): LivingEntity;
	getTarget(): Entity;
	setTarget(target: Entity): void;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getReason(): EntityTargetEvent$TargetReason;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityTargetLivingEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTargetLivingEntityEvent');
	}
	constructor(entity: Entity, target: LivingEntity, reason: EntityTargetEvent$TargetReason);
	constructor(...args: any[]) {
		return new EntityTargetLivingEntityEvent.$javaClass(...args);
	}
}

