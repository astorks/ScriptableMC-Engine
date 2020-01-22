declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Explosive} from '../../../../org/bukkit/entity/Explosive.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface ExplosionPrimeEvent extends EntityEvent, Cancellable {
	setFire(fire: boolean): void;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getFire(): boolean;
	getRadius(): number;
	setRadius(radius: number): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ExplosionPrimeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ExplosionPrimeEvent');
	}
	constructor(explosive: Explosive);
	constructor(what: Entity, radius: number, fire: boolean);
	constructor(...args: any[]) {
		return new ExplosionPrimeEvent.$javaClass(...args);
	}
}

