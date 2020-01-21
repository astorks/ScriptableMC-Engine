declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityTeleportEvent} from '../../../../org/bukkit/event/entity/EntityTeleportEvent.js'

export interface EntityPortalEvent extends EntityTeleportEvent {
	getHandlers(): HandlerList;
	setSearchRadius(arg0: number): void;
	getSearchRadius(): number;
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

export class EntityPortalEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPortalEvent');
	}
	constructor(arg0: Entity, arg1: Location, arg2: Location, arg3: number) {
		return new EntityPortalEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: Entity, arg1: Location, arg2: Location, arg3: number): EntityPortalEvent {
		return new EntityPortalEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new1(arg0: Entity, arg1: Location, arg2: Location): EntityPortalEvent {
		return new EntityPortalEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return EntityPortalEvent.$javaClass.getHandlerList();
	}
}

