declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {ThrownPotion} from '../../../../org/bukkit/entity/ThrownPotion.js'
import {Projectile} from '../../../../org/bukkit/entity/Projectile.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {AreaEffectCloud} from '../../../../org/bukkit/entity/AreaEffectCloud.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {ProjectileHitEvent} from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js'

export interface LingeringPotionSplashEvent extends ProjectileHitEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): ThrownPotion;
	getEntity(): Projectile;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getAreaEffectCloud(): AreaEffectCloud;
	getHitBlock(): Block;
	getHitBlockFace(): BlockFace;
	getHitEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class LingeringPotionSplashEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.LingeringPotionSplashEvent');
	}
	constructor(potion: ThrownPotion, entity: AreaEffectCloud);
	constructor(...args: any[]) {
		return new LingeringPotionSplashEvent.$javaClass(...args);
	}
}

