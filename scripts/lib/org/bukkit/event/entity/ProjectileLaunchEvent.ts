declare var Java: any;
import {Projectile} from '../../../../org/bukkit/entity/Projectile.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntitySpawnEvent} from '../../../../org/bukkit/event/entity/EntitySpawnEvent.js'

export interface ProjectileLaunchEvent extends EntitySpawnEvent, Cancellable {
	getEntity(): Projectile;
	getEntity(): Entity;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getLocation(): Location;
	getHandlers(): HandlerList;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class ProjectileLaunchEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ProjectileLaunchEvent');
	}
	constructor(arg0: Entity) {
		return new ProjectileLaunchEvent.$javaClass(arg0);
	}
	public static new0(arg0: Entity): ProjectileLaunchEvent {
		return new ProjectileLaunchEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return ProjectileLaunchEvent.$javaClass.getHandlerList();
	}
}

