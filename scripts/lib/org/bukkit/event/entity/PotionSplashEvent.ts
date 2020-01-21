declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Projectile} from '../../../../org/bukkit/entity/Projectile.js'
import {ThrownPotion} from '../../../../org/bukkit/entity/ThrownPotion.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {ProjectileHitEvent} from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js'

export interface PotionSplashEvent extends ProjectileHitEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Projectile;
	getEntity(): ThrownPotion;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getAffectedEntities(): any;
	getPotion(): ThrownPotion;
	setIntensity(arg0: LivingEntity, arg1: number): void;
	getIntensity(arg0: LivingEntity): number;
	getHitEntity(): Entity;
	getHitBlock(): Block;
	getHitBlockFace(): BlockFace;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PotionSplashEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PotionSplashEvent');
	}
	constructor(arg0: ThrownPotion, arg1: any) {
		return new PotionSplashEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: ThrownPotion, arg1: any): PotionSplashEvent {
		return new PotionSplashEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PotionSplashEvent.$javaClass.getHandlerList();
	}
}

