declare var Java: any;
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface BoundingBox extends ConfigurationSerializable {
	clone(): BoundingBox;
	clone(): any;
	contains(min: Vector, max: Vector): boolean;
	contains(position: Vector): boolean;
	contains(x: number, y: number, z: number): boolean;
	contains(other: BoundingBox): boolean;
	copy(other: BoundingBox): BoundingBox;
	expand(expansion: Vector): BoundingBox;
	expand(x: number, y: number, z: number): BoundingBox;
	expand(negativeX: number, negativeY: number, negativeZ: number, positiveX: number, positiveY: number, positiveZ: number): BoundingBox;
	expand(direction: Vector, expansion: number): BoundingBox;
	expand(expansion: number): BoundingBox;
	expand(dirX: number, dirY: number, dirZ: number, expansion: number): BoundingBox;
	expand(blockFace: BlockFace, expansion: number): BoundingBox;
	shift(shift: Vector): BoundingBox;
	shift(shift: Location): BoundingBox;
	shift(shiftX: number, shiftY: number, shiftZ: number): BoundingBox;
	resize(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): BoundingBox;
	union(position: Location): BoundingBox;
	union(posX: number, posY: number, posZ: number): BoundingBox;
	union(other: BoundingBox): BoundingBox;
	union(position: Vector): BoundingBox;
	serialize(): any;
	getHeight(): number;
	getCenterX(): number;
	getCenterZ(): number;
	getMaxX(): number;
	getMax(): Vector;
	getWidthX(): number;
	getMinX(): number;
	getWidthZ(): number;
	getVolume(): number;
	getCenterY(): number;
	getCenter(): Vector;
	getMaxZ(): number;
	getMaxY(): number;
	getMinY(): number;
	getMinZ(): number;
	getMin(): Vector;
	expandDirectional(direction: Vector): BoundingBox;
	expandDirectional(dirX: number, dirY: number, dirZ: number): BoundingBox;
	intersection(other: BoundingBox): BoundingBox;
	overlaps(min: Vector, max: Vector): boolean;
	overlaps(other: BoundingBox): boolean;
	rayTrace(start: Vector, direction: Vector, maxDistance: number): RayTraceResult;
}

export class BoundingBox {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.BoundingBox');
	}
	constructor();
	constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);
	constructor(...args: any[]) {
		return new BoundingBox.$javaClass(...args);
	}
}

