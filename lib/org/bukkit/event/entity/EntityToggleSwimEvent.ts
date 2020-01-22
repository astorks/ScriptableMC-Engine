declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityToggleSwimEvent extends EntityEvent, Cancellable {
	isSwimming(): boolean;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityToggleSwimEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityToggleSwimEvent');
	}
	constructor(who: LivingEntity, isSwimming: boolean);
	constructor(...args: any[]) {
		return new EntityToggleSwimEvent.$javaClass(...args);
	}
}

