declare var Java: any;
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'

export interface RayTraceResult {
	getHitEntity(): Entity;
	getHitBlockFace(): BlockFace;
	getHitBlock(): Block;
	getHitPosition(): Vector;
}

export class RayTraceResult {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.RayTraceResult');
	}
	constructor(hitPosition: Vector, hitEntity: Entity, hitBlockFace: BlockFace);
	constructor(hitPosition: Vector, hitEntity: Entity);
	constructor(hitPosition: Vector, hitBlock: Block, hitBlockFace: BlockFace);
	constructor(hitPosition: Vector);
	constructor(hitPosition: Vector, hitBlockFace: BlockFace);
	constructor(...args: any[]) {
		return new RayTraceResult.$javaClass(...args);
	}
}

