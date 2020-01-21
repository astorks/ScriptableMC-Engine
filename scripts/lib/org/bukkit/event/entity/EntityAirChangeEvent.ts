declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityAirChangeEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	setAmount(arg0: number): void;
	getAmount(): number;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityAirChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityAirChangeEvent');
	}
	constructor(arg0: Entity, arg1: number) {
		return new EntityAirChangeEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Entity, arg1: number): EntityAirChangeEvent {
		return new EntityAirChangeEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return EntityAirChangeEvent.$javaClass.getHandlerList();
	}
}

