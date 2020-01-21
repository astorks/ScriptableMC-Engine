declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityToggleSwimEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	isSwimming(): boolean;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityToggleSwimEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityToggleSwimEvent');
	}
	constructor(arg0: LivingEntity, arg1: boolean) {
		return new EntityToggleSwimEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: LivingEntity, arg1: boolean): EntityToggleSwimEvent {
		return new EntityToggleSwimEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return EntityToggleSwimEvent.$javaClass.getHandlerList();
	}
}

