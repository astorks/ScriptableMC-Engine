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

