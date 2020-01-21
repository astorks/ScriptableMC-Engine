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
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntitySpawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntitySpawnEvent');
	}
	constructor(spawnee: Entity);
	constructor(...args: any[]) {
		return new EntitySpawnEvent.$javaClass(...args);
	}
}

