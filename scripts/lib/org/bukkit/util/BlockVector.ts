declare var Java: any;
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {Location} from '../../../org/bukkit/Location.js'
import {World} from '../../../org/bukkit/World.js'

export interface BlockVector extends Vector {
	clone(): Vector;
	clone(): any;
	clone(): BlockVector;
	add(arg0: Vector): Vector;
	length(): number;
	dot(arg0: Vector): number;
	copy(arg0: Vector): Vector;
	zero(): Vector;
	normalize(): Vector;
	distance(arg0: Vector): number;
	divide(arg0: Vector): Vector;
	multiply(arg0: number): Vector;
	multiply(arg0: Vector): Vector;
	multiply(arg0: number): Vector;
	multiply(arg0: number): Vector;
	isNormalized(): boolean;
	serialize(): any;
	setY(arg0: number): Vector;
	setY(arg0: number): Vector;
	setY(arg0: number): Vector;
	getY(): number;
	getBlockY(): number;
	setX(arg0: number): Vector;
	setX(arg0: number): Vector;
	setX(arg0: number): Vector;
	setZ(arg0: number): Vector;
	setZ(arg0: number): Vector;
	setZ(arg0: number): Vector;
	getX(): number;
	getBlockX(): number;
	getZ(): number;
	getBlockZ(): number;
	subtract(arg0: Vector): Vector;
	lengthSquared(): number;
	checkFinite(): void;
	distanceSquared(arg0: Vector): number;
	rotateAroundNonUnitAxis(arg0: Vector, arg1: number): Vector;
	midpoint(arg0: Vector): Vector;
	getCrossProduct(arg0: Vector): Vector;
	isInSphere(arg0: Vector, arg1: number): boolean;
	angle(arg0: Vector): number;
	rotateAroundZ(arg0: number): Vector;
	rotateAroundAxis(arg0: Vector, arg1: number): Vector;
	crossProduct(arg0: Vector): Vector;
	getMidpoint(arg0: Vector): Vector;
	rotateAroundY(arg0: number): Vector;
	toLocation(arg0: World): Location;
	toLocation(arg0: World, arg1: number, arg2: number): Location;
	rotateAroundX(arg0: number): Vector;
	isInAABB(arg0: Vector, arg1: Vector): boolean;
	toBlockVector(): BlockVector;
}

export class BlockVector {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.BlockVector');
	}
	constructor(arg0: number, arg1: number, arg2: number) {
		return new BlockVector.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: number, arg1: number, arg2: number): BlockVector {
		return new BlockVector.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: number, arg1: number, arg2: number): BlockVector {
		return new BlockVector.$javaClass(arg0, arg1, arg2);
	}
	public static new2(arg0: number, arg1: number, arg2: number): BlockVector {
		return new BlockVector.$javaClass(arg0, arg1, arg2);
	}
	public static new3(arg0: Vector): BlockVector {
		return new BlockVector.$javaClass(arg0);
	}
	public static new4(): BlockVector {
		return new BlockVector.$javaClass();
	}
	public static deserialize(arg0: any): BlockVector {
		return BlockVector.$javaClass.deserialize(arg0);
	}
	public static deserialize0(arg0: any): Vector {
		return BlockVector.$javaClass.deserialize(arg0);
	}
	public static getEpsilon(): number {
		return BlockVector.$javaClass.getEpsilon();
	}
	public static getMaximum(arg0: Vector, arg1: Vector): Vector {
		return BlockVector.$javaClass.getMaximum(arg0, arg1);
	}
	public static getRandom(): Vector {
		return BlockVector.$javaClass.getRandom();
	}
	public static getMinimum(arg0: Vector, arg1: Vector): Vector {
		return BlockVector.$javaClass.getMinimum(arg0, arg1);
	}
}

