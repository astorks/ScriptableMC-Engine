declare var Java: any;
import {Location} from '../../../../org/bukkit/Location.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityPortalEnterEvent extends EntityEvent {
	getLocation(): Location;
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityPortalEnterEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPortalEnterEvent');
	}
	constructor(entity: Entity, location: Location);
	constructor(...args: any[]) {
		return new EntityPortalEnterEvent.$javaClass(...args);
	}
}

