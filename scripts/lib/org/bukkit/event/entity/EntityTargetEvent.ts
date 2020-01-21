declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityTargetEvent$TargetReason} from '../../../../org/bukkit/event/entity/EntityTargetEvent$TargetReason.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityTargetEvent extends EntityEvent, Cancellable {
	getTarget(): Entity;
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

export class EntityTargetEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTargetEvent');
	}
	constructor(arg0: Entity, arg1: Entity, arg2: EntityTargetEvent$TargetReason) {
		return new EntityTargetEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Entity, arg1: Entity, arg2: EntityTargetEvent$TargetReason): EntityTargetEvent {
		return new EntityTargetEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return EntityTargetEvent.$javaClass.getHandlerList();
	}
}

