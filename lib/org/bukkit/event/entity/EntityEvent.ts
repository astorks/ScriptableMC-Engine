declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface EntityEvent extends Event {
	getEntity(): Entity;
	getEntityType(): EntityType;
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityEvent');
	}
	constructor(what: Entity);
	constructor(...args: any[]) {
		return new EntityEvent.$javaClass(...args);
	}
}

