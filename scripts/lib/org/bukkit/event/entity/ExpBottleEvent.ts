declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Projectile} from '../../../../org/bukkit/entity/Projectile.js'
import {ThrownExpBottle} from '../../../../org/bukkit/entity/ThrownExpBottle.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {ProjectileHitEvent} from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js'

export interface ExpBottleEvent extends ProjectileHitEvent {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Projectile;
	getEntity(): ThrownExpBottle;
	setShowEffect(arg0: boolean): void;
	getShowEffect(): boolean;
	getExperience(): number;
	setExperience(arg0: number): void;
	getHitEntity(): Entity;
	getHitBlock(): Block;
	getHitBlockFace(): BlockFace;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class ExpBottleEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ExpBottleEvent');
	}
	constructor(arg0: ThrownExpBottle, arg1: number) {
		return new ExpBottleEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: ThrownExpBottle, arg1: number): ExpBottleEvent {
		return new ExpBottleEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return ExpBottleEvent.$javaClass.getHandlerList();
	}
}

