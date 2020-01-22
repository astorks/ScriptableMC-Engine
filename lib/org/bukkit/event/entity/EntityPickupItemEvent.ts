declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityPickupItemEvent extends EntityEvent, Cancellable {
	getRemaining(): number;
	getEntity(): Entity;
	getEntity(): LivingEntity;
	getItem(): Item;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityPickupItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPickupItemEvent');
	}
	constructor(entity: LivingEntity, item: Item, remaining: number);
	constructor(...args: any[]) {
		return new EntityPickupItemEvent.$javaClass(...args);
	}
}

