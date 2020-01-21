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
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityPortalEnterEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPortalEnterEvent');
	}
	constructor(arg0: Entity, arg1: Location) {
		return new EntityPortalEnterEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Entity, arg1: Location): EntityPortalEnterEvent {
		return new EntityPortalEnterEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return EntityPortalEnterEvent.$javaClass.getHandlerList();
	}
}

