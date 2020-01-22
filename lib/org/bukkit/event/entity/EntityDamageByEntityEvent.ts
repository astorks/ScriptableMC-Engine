declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityDamageEvent$DamageCause} from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js'
import {EntityDamageEvent$DamageModifier} from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityDamageEvent} from '../../../../org/bukkit/event/entity/EntityDamageEvent.js'

export interface EntityDamageByEntityEvent extends EntityDamageEvent {
	getDamager(): Entity;
	getCause(): EntityDamageEvent$DamageCause;
	getDamage(type: EntityDamageEvent$DamageModifier): number;
	getDamage(): number;
	isApplicable(type: EntityDamageEvent$DamageModifier): boolean;
	setDamage(damage: number): void;
	setDamage(type: EntityDamageEvent$DamageModifier, damage: number): void;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	getFinalDamage(): number;
	setCancelled(cancel: boolean): void;
	getOriginalDamage(type: EntityDamageEvent$DamageModifier): number;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityDamageByEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDamageByEntityEvent');
	}
	constructor(damager: Entity, damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
	constructor(damager: Entity, damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
	constructor(...args: any[]) {
		return new EntityDamageByEntityEvent.$javaClass(...args);
	}
}

