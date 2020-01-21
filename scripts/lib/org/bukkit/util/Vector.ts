declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {World} from '../../../org/bukkit/World.js'
import {BlockVector} from '../../../org/bukkit/util/BlockVector.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface Vector extends ConfigurationSerializable {
	add(arg0: Vector): Vector;
	length(): number;
	clone(): Vector;
	clone(): any;
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

export class Vector {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.Vector');
	}
	constructor(arg0: number, arg1: number, arg2: number) {
		return new Vector.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: number, arg1: number, arg2: number): Vector {
		return new Vector.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: number, arg1: number, arg2: number): Vector {
		return new Vector.$javaClass(arg0, arg1, arg2);
	}
	public static new2(): Vector {
		return new Vector.$javaClass();
	}
	public static new3(arg0: number, arg1: number, arg2: number): Vector {
		return new Vector.$javaClass(arg0, arg1, arg2);
	}
	public static deserialize(arg0: any): Vector {
		return Vector.$javaClass.deserialize(arg0);
	}
	public static getEpsilon(): number {
		return Vector.$javaClass.getEpsilon();
	}
	public static getMaximum(arg0: Vector, arg1: Vector): Vector {
		return Vector.$javaClass.getMaximum(arg0, arg1);
	}
	public static getRandom(): Vector {
		return Vector.$javaClass.getRandom();
	}
	public static getMinimum(arg0: Vector, arg1: Vector): Vector {
		return Vector.$javaClass.getMinimum(arg0, arg1);
	}
}

