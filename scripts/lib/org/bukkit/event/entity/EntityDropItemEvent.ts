declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityDropItemEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getItemDrop(): Item;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityDropItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDropItemEvent');
	}
	constructor(arg0: Entity, arg1: Item) {
		return new EntityDropItemEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Entity, arg1: Item): EntityDropItemEvent {
		return new EntityDropItemEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return EntityDropItemEvent.$javaClass.getHandlerList();
	}
}

