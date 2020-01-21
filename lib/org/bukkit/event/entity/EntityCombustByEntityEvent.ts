declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityCombustEvent} from '../../../../org/bukkit/event/entity/EntityCombustEvent.js'

export interface EntityCombustByEntityEvent extends EntityCombustEvent {
	getCombuster(): Entity;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getDuration(): number;
	setDuration(duration: number): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityCombustByEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityCombustByEntityEvent');
	}
	constructor(combuster: Entity, combustee: Entity, duration: number);
	constructor(...args: any[]) {
		return new EntityCombustByEntityEvent.$javaClass(...args);
	}
}

