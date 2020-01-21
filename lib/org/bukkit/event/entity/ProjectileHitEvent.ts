declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Projectile} from '../../../../org/bukkit/entity/Projectile.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface ProjectileHitEvent extends EntityEvent {
	getHandlers(): HandlerList;
	getEntity(): Projectile;
	getEntity(): Entity;
	getHitEntity(): Entity;
	getHitBlockFace(): BlockFace;
	getHitBlock(): Block;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ProjectileHitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ProjectileHitEvent');
	}
	constructor(projectile: Projectile, hitEntity: Entity, hitBlock: Block, hitFace: BlockFace);
	constructor(projectile: Projectile, hitBlock: Block);
	constructor(projectile: Projectile, hitEntity: Entity);
	constructor(projectile: Projectile);
	constructor(projectile: Projectile, hitEntity: Entity, hitBlock: Block);
	constructor(...args: any[]) {
		return new ProjectileHitEvent.$javaClass(...args);
	}
}

