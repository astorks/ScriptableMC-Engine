declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityAirChangeEvent extends EntityEvent, Cancellable {
	getAmount(): number;
	setAmount(amount: number): void;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancelled: boolean): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityAirChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityAirChangeEvent');
	}
	constructor(what: Entity, amount: number);
	constructor(...args: any[]) {
		return new EntityAirChangeEvent.$javaClass(...args);
	}
}

