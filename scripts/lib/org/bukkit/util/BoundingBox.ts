declare var Java: any;
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {Location} from '../../../org/bukkit/Location.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface BoundingBox extends ConfigurationSerializable {
	clone(): any;
	clone(): BoundingBox;
	contains(arg0: Vector): boolean;
	contains(arg0: number, arg1: number, arg2: number): boolean;
	contains(arg0: BoundingBox): boolean;
	contains(arg0: Vector, arg1: Vector): boolean;
	copy(arg0: BoundingBox): BoundingBox;
	expand(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): BoundingBox;
	expand(arg0: BlockFace, arg1: number): BoundingBox;
	expand(arg0: number, arg1: number, arg2: number): BoundingBox;
	expand(arg0: Vector): BoundingBox;
	expand(arg0: Vector, arg1: number): BoundingBox;
	expand(arg0: number): BoundingBox;
	expand(arg0: number, arg1: number, arg2: number, arg3: number): BoundingBox;
	shift(arg0: number, arg1: number, arg2: number): BoundingBox;
	shift(arg0: Location): BoundingBox;
	shift(arg0: Vector): BoundingBox;
	resize(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): BoundingBox;
	union(arg0: number, arg1: number, arg2: number): BoundingBox;
	union(arg0: Vector): BoundingBox;
	union(arg0: Location): BoundingBox;
	union(arg0: BoundingBox): BoundingBox;
	getMinX(): number;
	getMinY(): number;
	intersection(arg0: BoundingBox): BoundingBox;
	getCenterZ(): number;
	getCenterX(): number;
	rayTrace(arg0: Vector, arg1: Vector, arg2: number): RayTraceResult;
	serialize(): any;
	getHeight(): number;
	getMax(): Vector;
	getVolume(): number;
	getMin(): Vector;
	getMaxY(): number;
	getWidthZ(): number;
	getMaxZ(): number;
	getWidthX(): number;
	expandDirectional(arg0: Vector): BoundingBox;
	expandDirectional(arg0: number, arg1: number, arg2: number): BoundingBox;
	getMinZ(): number;
	getCenter(): Vector;
	overlaps(arg0: Vector, arg1: Vector): boolean;
	overlaps(arg0: BoundingBox): boolean;
	getMaxX(): number;
	getCenterY(): number;
}

export class BoundingBox {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.BoundingBox');
	}
	constructor() {
		return new BoundingBox.$javaClass();
	}
	public static new0(): BoundingBox {
		return new BoundingBox.$javaClass();
	}
	public static new1(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): BoundingBox {
		return new BoundingBox.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static of(arg0: Vector, arg1: Vector): BoundingBox {
		return BoundingBox.$javaClass.of(arg0, arg1);
	}
	public static of0(arg0: Vector, arg1: number, arg2: number, arg3: number): BoundingBox {
		return BoundingBox.$javaClass.of(arg0, arg1, arg2, arg3);
	}
	public static of1(arg0: Block): BoundingBox {
		return BoundingBox.$javaClass.of(arg0);
	}
	public static of2(arg0: Block, arg1: Block): BoundingBox {
		return BoundingBox.$javaClass.of(arg0, arg1);
	}
	public static of3(arg0: Location, arg1: Location): BoundingBox {
		return BoundingBox.$javaClass.of(arg0, arg1);
	}
	public static of4(arg0: Location, arg1: number, arg2: number, arg3: number): BoundingBox {
		return BoundingBox.$javaClass.of(arg0, arg1, arg2, arg3);
	}
	public static deserialize(arg0: any): BoundingBox {
		return BoundingBox.$javaClass.deserialize(arg0);
	}
}

