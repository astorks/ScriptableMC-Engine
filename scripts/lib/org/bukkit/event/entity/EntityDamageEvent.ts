declare var Java: any;
import {EntityDamageEvent$DamageCause} from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityDamageEvent$DamageModifier} from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityDamageEvent extends EntityEvent, Cancellable {
	getCause(): EntityDamageEvent$DamageCause;
	getHandlers(): HandlerList;
	isApplicable(arg0: EntityDamageEvent$DamageModifier): boolean;
	setDamage(arg0: number): void;
	setDamage(arg0: EntityDamageEvent$DamageModifier, arg1: number): void;
	getDamage(): number;
	getDamage(arg0: EntityDamageEvent$DamageModifier): number;
	isCancelled(): boolean;
	getFinalDamage(): number;
	setCancelled(arg0: boolean): void;
	getOriginalDamage(arg0: EntityDamageEvent$DamageModifier): number;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityDamageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDamageEvent');
	}
	constructor(arg0: Entity, arg1: EntityDamageEvent$DamageCause, arg2: any, arg3: any) {
		return new EntityDamageEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: Entity, arg1: EntityDamageEvent$DamageCause, arg2: any, arg3: any): EntityDamageEvent {
		return new EntityDamageEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new1(arg0: Entity, arg1: EntityDamageEvent$DamageCause, arg2: number): EntityDamageEvent {
		return new EntityDamageEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return EntityDamageEvent.$javaClass.getHandlerList();
	}
}

