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
	setDamage(damage: number): void;
	setDamage(type: EntityDamageEvent$DamageModifier, damage: number): void;
	isApplicable(type: EntityDamageEvent$DamageModifier): boolean;
	getDamage(type: EntityDamageEvent$DamageModifier): number;
	getDamage(): number;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getFinalDamage(): number;
	getOriginalDamage(type: EntityDamageEvent$DamageModifier): number;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityDamageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDamageEvent');
	}
	constructor(damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
	constructor(damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
	constructor(...args: any[]) {
		return new EntityDamageEvent.$javaClass(...args);
	}
}

