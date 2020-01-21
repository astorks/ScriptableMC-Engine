declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vector} from '../../../../org/bukkit/util/Vector.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityTeleportEvent} from '../../../../org/bukkit/event/entity/EntityTeleportEvent.js'

export interface EntityPortalExitEvent extends EntityTeleportEvent {
	getHandlers(): HandlerList;
	setAfter(after: Vector): void;
	getBefore(): Vector;
	getAfter(): Vector;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getTo(): Location;
	getFrom(): Location;
	setFrom(from: Location): void;
	setTo(to: Location): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityPortalExitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPortalExitEvent');
	}
	constructor(entity: Entity, from: Location, to: Location, before: Vector, after: Vector);
	constructor(...args: any[]) {
		return new EntityPortalExitEvent.$javaClass(...args);
	}
}

