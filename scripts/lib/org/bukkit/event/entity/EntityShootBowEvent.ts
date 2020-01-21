declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityShootBowEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): LivingEntity;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getProjectile(): Entity;
	getForce(): number;
	getBow(): ItemStack;
	setProjectile(arg0: Entity): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityShootBowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityShootBowEvent');
	}
	constructor(arg0: LivingEntity, arg1: ItemStack, arg2: Entity, arg3: number) {
		return new EntityShootBowEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: LivingEntity, arg1: ItemStack, arg2: Entity, arg3: number): EntityShootBowEvent {
		return new EntityShootBowEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static getHandlerList(): HandlerList {
		return EntityShootBowEvent.$javaClass.getHandlerList();
	}
}

