declare var Java: any;
import {AnimalTamer} from '../../../../org/bukkit/entity/AnimalTamer.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityTameEvent extends EntityEvent, Cancellable {
	getOwner(): AnimalTamer;
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): LivingEntity;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityTameEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTameEvent');
	}
	constructor(arg0: LivingEntity, arg1: AnimalTamer) {
		return new EntityTameEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: LivingEntity, arg1: AnimalTamer): EntityTameEvent {
		return new EntityTameEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return EntityTameEvent.$javaClass.getHandlerList();
	}
}

