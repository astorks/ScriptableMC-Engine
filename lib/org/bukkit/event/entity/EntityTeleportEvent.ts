declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityTeleportEvent extends EntityEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getTo(): Location;
	setTo(to: Location): void;
	getFrom(): Location;
	setFrom(from: Location): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityTeleportEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTeleportEvent');
	}
	constructor(what: Entity, from: Location, to: Location);
	constructor(...args: any[]) {
		return new EntityTeleportEvent.$javaClass(...args);
	}
}

