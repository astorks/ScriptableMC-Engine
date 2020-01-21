declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Projectile} from '../../../../org/bukkit/entity/Projectile.js'
import {ThrownPotion} from '../../../../org/bukkit/entity/ThrownPotion.js'
import {AreaEffectCloud} from '../../../../org/bukkit/entity/AreaEffectCloud.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {ProjectileHitEvent} from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js'

export interface LingeringPotionSplashEvent extends ProjectileHitEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Projectile;
	getEntity(): ThrownPotion;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getAreaEffectCloud(): AreaEffectCloud;
	getHitEntity(): Entity;
	getHitBlock(): Block;
	getHitBlockFace(): BlockFace;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class LingeringPotionSplashEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.LingeringPotionSplashEvent');
	}
	constructor(arg0: ThrownPotion, arg1: AreaEffectCloud) {
		return new LingeringPotionSplashEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: ThrownPotion, arg1: AreaEffectCloud): LingeringPotionSplashEvent {
		return new LingeringPotionSplashEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return LingeringPotionSplashEvent.$javaClass.getHandlerList();
	}
}

