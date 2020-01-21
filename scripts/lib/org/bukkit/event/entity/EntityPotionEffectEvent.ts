declare var Java: any;
import {EntityPotionEffectEvent$Cause} from '../../../../org/bukkit/event/entity/EntityPotionEffectEvent$Cause.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityPotionEffectEvent$Action} from '../../../../org/bukkit/event/entity/EntityPotionEffectEvent$Action.js'
import {PotionEffect} from '../../../../org/bukkit/potion/PotionEffect.js'
import {PotionEffectType} from '../../../../org/bukkit/potion/PotionEffectType.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityPotionEffectEvent extends EntityEvent, Cancellable {
	getCause(): EntityPotionEffectEvent$Cause;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getAction(): EntityPotionEffectEvent$Action;
	getOldEffect(): PotionEffect;
	isOverride(): boolean;
	setOverride(arg0: boolean): void;
	getModifiedType(): PotionEffectType;
	getNewEffect(): PotionEffect;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityPotionEffectEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPotionEffectEvent');
	}
	constructor(arg0: LivingEntity, arg1: PotionEffect, arg2: PotionEffect, arg3: EntityPotionEffectEvent$Cause, arg4: EntityPotionEffectEvent$Action, arg5: boolean) {
		return new EntityPotionEffectEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new0(arg0: LivingEntity, arg1: PotionEffect, arg2: PotionEffect, arg3: EntityPotionEffectEvent$Cause, arg4: EntityPotionEffectEvent$Action, arg5: boolean): EntityPotionEffectEvent {
		return new EntityPotionEffectEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static getHandlerList(): HandlerList {
		return EntityPotionEffectEvent.$javaClass.getHandlerList();
	}
}

