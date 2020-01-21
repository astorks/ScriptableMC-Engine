declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityToggleGlideEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	isGliding(): boolean;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityToggleGlideEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityToggleGlideEvent');
	}
	constructor(who: LivingEntity, isGliding: boolean);
	constructor(...args: any[]) {
		return new EntityToggleGlideEvent.$javaClass(...args);
	}
}

