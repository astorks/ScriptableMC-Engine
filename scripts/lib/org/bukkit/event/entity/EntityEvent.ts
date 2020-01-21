declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface EntityEvent extends Event {
	getEntity(): Entity;
	getEntityType(): EntityType;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityEvent');
	}
	constructor(arg0: Entity) {
		return new EntityEvent.$javaClass(arg0);
	}
	public static new0(arg0: Entity): EntityEvent {
		return new EntityEvent.$javaClass(arg0);
	}
}

