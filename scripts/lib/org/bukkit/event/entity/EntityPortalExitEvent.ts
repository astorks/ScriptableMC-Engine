declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vector} from '../../../../org/bukkit/util/Vector.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityTeleportEvent} from '../../../../org/bukkit/event/entity/EntityTeleportEvent.js'

export interface EntityPortalExitEvent extends EntityTeleportEvent {
	getHandlers(): HandlerList;
	getAfter(): Vector;
	setAfter(arg0: Vector): void;
	getBefore(): Vector;
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

export class EntityPortalExitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPortalExitEvent');
	}
	constructor(arg0: Entity, arg1: Location, arg2: Location, arg3: Vector, arg4: Vector) {
		return new EntityPortalExitEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new0(arg0: Entity, arg1: Location, arg2: Location, arg3: Vector, arg4: Vector): EntityPortalExitEvent {
		return new EntityPortalExitEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static getHandlerList(): HandlerList {
		return EntityPortalExitEvent.$javaClass.getHandlerList();
	}
}

