declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityTeleportEvent} from '../../../../org/bukkit/event/entity/EntityTeleportEvent.js'

export interface EntityPortalEvent extends EntityTeleportEvent {
	getHandlers(): HandlerList;
	getSearchRadius(): number;
	setSearchRadius(searchRadius: number): void;
	isCancelled(): boolean;
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

export class EntityPortalEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPortalEvent');
	}
	constructor(entity: Entity, from: Location, to: Location, searchRadius: number);
	constructor(entity: Entity, from: Location, to: Location);
	constructor(...args: any[]) {
		return new EntityPortalEvent.$javaClass(...args);
	}
}

