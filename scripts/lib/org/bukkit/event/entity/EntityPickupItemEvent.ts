declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityPickupItemEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getRemaining(): number;
	getEntity(): Entity;
	getEntity(): LivingEntity;
	getItem(): Item;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityPickupItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPickupItemEvent');
	}
	constructor(arg0: LivingEntity, arg1: Item, arg2: number) {
		return new EntityPickupItemEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: LivingEntity, arg1: Item, arg2: number): EntityPickupItemEvent {
		return new EntityPickupItemEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return EntityPickupItemEvent.$javaClass.getHandlerList();
	}
}

