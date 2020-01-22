declare var Java: any;
import {Block} from '../../../../org/bukkit/block/Block.js'
import {EntityDamageEvent$DamageCause} from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js'
import {EntityDamageEvent$DamageModifier} from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityDamageEvent} from '../../../../org/bukkit/event/entity/EntityDamageEvent.js'

export interface EntityDamageByBlockEvent extends EntityDamageEvent {
	getDamager(): Block;
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

export class EntityDamageByBlockEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDamageByBlockEvent');
	}
	constructor(damager: Block, damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
	constructor(damager: Block, damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
	constructor(...args: any[]) {
		return new EntityDamageByBlockEvent.$javaClass(...args);
	}
}

