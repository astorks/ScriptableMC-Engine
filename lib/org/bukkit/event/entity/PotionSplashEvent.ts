declare var Java: any;
import {ThrownPotion} from '../../../../org/bukkit/entity/ThrownPotion.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Projectile} from '../../../../org/bukkit/entity/Projectile.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {ProjectileHitEvent} from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js'

export interface PotionSplashEvent extends ProjectileHitEvent, Cancellable {
	getEntity(): ThrownPotion;
	getEntity(): Entity;
	getEntity(): Projectile;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getIntensity(entity: LivingEntity): number;
	setIntensity(entity: LivingEntity, intensity: number): void;
	getPotion(): ThrownPotion;
	getAffectedEntities(): any;
	getHitBlock(): Block;
	getHitBlockFace(): BlockFace;
	getHitEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PotionSplashEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PotionSplashEvent');
	}
	constructor(potion: ThrownPotion, affectedEntities: any);
	constructor(...args: any[]) {
		return new PotionSplashEvent.$javaClass(...args);
	}
}

