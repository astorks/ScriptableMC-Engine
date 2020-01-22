declare var Java: any;
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityBreedEvent extends EntityEvent, Cancellable {
	getEntity(): LivingEntity;
	getEntity(): Entity;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getExperience(): number;
	getBredWith(): ItemStack;
	setExperience(experience: number): void;
	getMother(): LivingEntity;
	getBreeder(): LivingEntity;
	getFather(): LivingEntity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityBreedEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityBreedEvent');
	}
	constructor(child: LivingEntity, mother: LivingEntity, father: LivingEntity, breeder: LivingEntity, bredWith: ItemStack, experience: number);
	constructor(...args: any[]) {
		return new EntityBreedEvent.$javaClass(...args);
	}
}

