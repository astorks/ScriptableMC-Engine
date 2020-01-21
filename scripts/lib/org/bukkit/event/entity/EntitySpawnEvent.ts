declare var Java: any;
import {Location} from '../../../../org/bukkit/Location.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntitySpawnEvent extends EntityEvent, Cancellable {
	getLocation(): Location;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntitySpawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntitySpawnEvent');
	}
	constructor(arg0: Entity) {
		return new EntitySpawnEvent.$javaClass(arg0);
	}
	public static new0(arg0: Entity): EntitySpawnEvent {
		return new EntitySpawnEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return EntitySpawnEvent.$javaClass.getHandlerList();
	}
}

