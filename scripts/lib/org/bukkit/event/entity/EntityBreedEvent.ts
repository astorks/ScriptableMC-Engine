declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityBreedEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): LivingEntity;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getExperience(): number;
	setExperience(arg0: number): void;
	getMother(): LivingEntity;
	getBreeder(): LivingEntity;
	getBredWith(): ItemStack;
	getFather(): LivingEntity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityBreedEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityBreedEvent');
	}
	constructor(arg0: LivingEntity, arg1: LivingEntity, arg2: LivingEntity, arg3: LivingEntity, arg4: ItemStack, arg5: number) {
		return new EntityBreedEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new0(arg0: LivingEntity, arg1: LivingEntity, arg2: LivingEntity, arg3: LivingEntity, arg4: ItemStack, arg5: number): EntityBreedEvent {
		return new EntityBreedEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static getHandlerList(): HandlerList {
		return EntityBreedEvent.$javaClass.getHandlerList();
	}
}

