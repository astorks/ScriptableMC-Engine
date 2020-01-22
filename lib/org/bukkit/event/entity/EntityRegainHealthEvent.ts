declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityRegainHealthEvent$RegainReason} from '../../../../org/bukkit/event/entity/EntityRegainHealthEvent$RegainReason.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityRegainHealthEvent extends EntityEvent, Cancellable {
	getAmount(): number;
	setAmount(amount: number): void;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getRegainReason(): EntityRegainHealthEvent$RegainReason;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityRegainHealthEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityRegainHealthEvent');
	}
	constructor(entity: Entity, amount: number, regainReason: EntityRegainHealthEvent$RegainReason);
	constructor(...args: any[]) {
		return new EntityRegainHealthEvent.$javaClass(...args);
	}
}

