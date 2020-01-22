declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityCombustEvent extends EntityEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getDuration(): number;
	setDuration(duration: number): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityCombustEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityCombustEvent');
	}
	constructor(combustee: Entity, duration: number);
	constructor(...args: any[]) {
		return new EntityCombustEvent.$javaClass(...args);
	}
}

