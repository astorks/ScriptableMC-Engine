declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityTargetEvent$TargetReason} from '../../../../org/bukkit/event/entity/EntityTargetEvent$TargetReason.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityTargetEvent} from '../../../../org/bukkit/event/entity/EntityTargetEvent.js'

export interface EntityTargetLivingEntityEvent extends EntityTargetEvent {
	getTarget(): Entity;
	getTarget(): LivingEntity;
	setTarget(arg0: Entity): void;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getReason(): EntityTargetEvent$TargetReason;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityTargetLivingEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTargetLivingEntityEvent');
	}
	constructor(arg0: Entity, arg1: LivingEntity, arg2: EntityTargetEvent$TargetReason) {
		return new EntityTargetLivingEntityEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Entity, arg1: LivingEntity, arg2: EntityTargetEvent$TargetReason): EntityTargetLivingEntityEvent {
		return new EntityTargetLivingEntityEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return EntityTargetLivingEntityEvent.$javaClass.getHandlerList();
	}
}

