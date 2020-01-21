declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Explosive} from '../../../../org/bukkit/entity/Explosive.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface ExplosionPrimeEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getFire(): boolean;
	setFire(arg0: boolean): void;
	setRadius(arg0: number): void;
	getRadius(): number;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class ExplosionPrimeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ExplosionPrimeEvent');
	}
	constructor(arg0: Explosive) {
		return new ExplosionPrimeEvent.$javaClass(arg0);
	}
	public static new0(arg0: Explosive): ExplosionPrimeEvent {
		return new ExplosionPrimeEvent.$javaClass(arg0);
	}
	public static new1(arg0: Entity, arg1: number, arg2: boolean): ExplosionPrimeEvent {
		return new ExplosionPrimeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return ExplosionPrimeEvent.$javaClass.getHandlerList();
	}
}

