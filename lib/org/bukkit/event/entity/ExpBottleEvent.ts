declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Projectile} from '../../../../org/bukkit/entity/Projectile.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {ThrownExpBottle} from '../../../../org/bukkit/entity/ThrownExpBottle.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {ProjectileHitEvent} from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js'

export interface ExpBottleEvent extends ProjectileHitEvent {
	getHandlers(): HandlerList;
	getEntity(): Projectile;
	getEntity(): Entity;
	getEntity(): ThrownExpBottle;
	getShowEffect(): boolean;
	setShowEffect(showEffect: boolean): void;
	getExperience(): number;
	setExperience(exp: number): void;
	getHitEntity(): Entity;
	getHitBlockFace(): BlockFace;
	getHitBlock(): Block;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ExpBottleEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ExpBottleEvent');
	}
	constructor(bottle: ThrownExpBottle, exp: number);
	constructor(...args: any[]) {
		return new ExpBottleEvent.$javaClass(...args);
	}
}

