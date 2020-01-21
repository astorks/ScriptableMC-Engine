declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityTeleportEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	setTo(arg0: Location): void;
	getTo(): Location;
	setFrom(arg0: Location): void;
	getFrom(): Location;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityTeleportEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTeleportEvent');
	}
	constructor(arg0: Entity, arg1: Location, arg2: Location) {
		return new EntityTeleportEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Entity, arg1: Location, arg2: Location): EntityTeleportEvent {
		return new EntityTeleportEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return EntityTeleportEvent.$javaClass.getHandlerList();
	}
}

