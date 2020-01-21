declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityDamageEvent$DamageCause} from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityDamageEvent$DamageModifier} from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityDamageEvent} from '../../../../org/bukkit/event/entity/EntityDamageEvent.js'

export interface EntityDamageByEntityEvent extends EntityDamageEvent {
	getDamager(): Entity;
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

export class EntityDamageByEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDamageByEntityEvent');
	}
	constructor(arg0: Entity, arg1: Entity, arg2: EntityDamageEvent$DamageCause, arg3: number) {
		return new EntityDamageByEntityEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: Entity, arg1: Entity, arg2: EntityDamageEvent$DamageCause, arg3: number): EntityDamageByEntityEvent {
		return new EntityDamageByEntityEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new1(arg0: Entity, arg1: Entity, arg2: EntityDamageEvent$DamageCause, arg3: any, arg4: any): EntityDamageByEntityEvent {
		return new EntityDamageByEntityEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static getHandlerList(): HandlerList {
		return EntityDamageByEntityEvent.$javaClass.getHandlerList();
	}
}

