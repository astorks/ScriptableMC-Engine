declare var Java: any;
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityShootBowEvent extends EntityEvent, Cancellable {
	getEntity(): LivingEntity;
	getEntity(): Entity;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	setProjectile(projectile: Entity): void;
	getForce(): number;
	getBow(): ItemStack;
	getProjectile(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityShootBowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityShootBowEvent');
	}
	constructor(shooter: LivingEntity, bow: ItemStack, projectile: Entity, force: number);
	constructor(...args: any[]) {
		return new EntityShootBowEvent.$javaClass(...args);
	}
}

