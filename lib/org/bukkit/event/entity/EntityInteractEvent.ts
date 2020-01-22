declare var Java: any;
import {Block} from '../../../../org/bukkit/block/Block.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityInteractEvent extends EntityEvent, Cancellable {
	getBlock(): Block;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityInteractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityInteractEvent');
	}
	constructor(entity: Entity, block: Block);
	constructor(...args: any[]) {
		return new EntityInteractEvent.$javaClass(...args);
	}
}

