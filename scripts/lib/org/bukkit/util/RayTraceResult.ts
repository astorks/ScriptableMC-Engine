declare var Java: any;
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'

export interface RayTraceResult {
	getHitEntity(): Entity;
	getHitBlock(): Block;
	getHitPosition(): Vector;
	getHitBlockFace(): BlockFace;
}

export class RayTraceResult {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.RayTraceResult');
	}
	constructor(arg0: Vector, arg1: Entity, arg2: BlockFace) {
		return new RayTraceResult.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Vector, arg1: Entity, arg2: BlockFace): RayTraceResult {
		return new RayTraceResult.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: Vector, arg1: Entity): RayTraceResult {
		return new RayTraceResult.$javaClass(arg0, arg1);
	}
	public static new2(arg0: Vector, arg1: Block, arg2: BlockFace): RayTraceResult {
		return new RayTraceResult.$javaClass(arg0, arg1, arg2);
	}
	public static new3(arg0: Vector): RayTraceResult {
		return new RayTraceResult.$javaClass(arg0);
	}
	public static new4(arg0: Vector, arg1: BlockFace): RayTraceResult {
		return new RayTraceResult.$javaClass(arg0, arg1);
	}
}

