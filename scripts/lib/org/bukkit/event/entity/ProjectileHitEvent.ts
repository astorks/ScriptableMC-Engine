declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Projectile} from '../../../../org/bukkit/entity/Projectile.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface ProjectileHitEvent extends EntityEvent {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Projectile;
	getHitEntity(): Entity;
	getHitBlock(): Block;
	getHitBlockFace(): BlockFace;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class ProjectileHitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ProjectileHitEvent');
	}
	constructor(arg0: Projectile, arg1: Entity, arg2: Block, arg3: BlockFace) {
		return new ProjectileHitEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: Projectile, arg1: Entity, arg2: Block, arg3: BlockFace): ProjectileHitEvent {
		return new ProjectileHitEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new1(arg0: Projectile, arg1: Block): ProjectileHitEvent {
		return new ProjectileHitEvent.$javaClass(arg0, arg1);
	}
	public static new2(arg0: Projectile, arg1: Entity): ProjectileHitEvent {
		return new ProjectileHitEvent.$javaClass(arg0, arg1);
	}
	public static new3(arg0: Projectile): ProjectileHitEvent {
		return new ProjectileHitEvent.$javaClass(arg0);
	}
	public static new4(arg0: Projectile, arg1: Entity, arg2: Block): ProjectileHitEvent {
		return new ProjectileHitEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return ProjectileHitEvent.$javaClass.getHandlerList();
	}
}

