declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityRegainHealthEvent$RegainReason} from '../../../../org/bukkit/event/entity/EntityRegainHealthEvent$RegainReason.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityRegainHealthEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	setAmount(arg0: number): void;
	getAmount(): number;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getRegainReason(): EntityRegainHealthEvent$RegainReason;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityRegainHealthEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityRegainHealthEvent');
	}
	constructor(arg0: Entity, arg1: number, arg2: EntityRegainHealthEvent$RegainReason) {
		return new EntityRegainHealthEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Entity, arg1: number, arg2: EntityRegainHealthEvent$RegainReason): EntityRegainHealthEvent {
		return new EntityRegainHealthEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return EntityRegainHealthEvent.$javaClass.getHandlerList();
	}
}

