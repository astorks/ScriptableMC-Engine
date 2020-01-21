declare var Java: any;
import {Location} from '../../../../org/bukkit/Location.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityExplodeEvent extends EntityEvent, Cancellable {
	getLocation(): Location;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	blockList(): any;
	getYield(): number;
	setYield(arg0: number): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityExplodeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityExplodeEvent');
	}
	constructor(arg0: Entity, arg1: Location, arg2: any, arg3: number) {
		return new EntityExplodeEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: Entity, arg1: Location, arg2: any, arg3: number): EntityExplodeEvent {
		return new EntityExplodeEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static getHandlerList(): HandlerList {
		return EntityExplodeEvent.$javaClass.getHandlerList();
	}
}

