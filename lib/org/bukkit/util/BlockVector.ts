declare var Java: any;
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {Location} from '../../../org/bukkit/Location.js'
import {World} from '../../../org/bukkit/World.js'

export interface BlockVector extends Vector {
	clone(): any;
	clone(): Vector;
	clone(): BlockVector;
	add(vec: Vector): Vector;
	length(): number;
	dot(other: Vector): number;
	copy(vec: Vector): Vector;
	zero(): Vector;
	normalize(): Vector;
	distance(o: Vector): number;
	divide(vec: Vector): Vector;
	multiply(m: number): Vector;
	multiply(vec: Vector): Vector;
	multiply(m: number): Vector;
	multiply(m: number): Vector;
	isNormalized(): boolean;
	serialize(): any;
	setX(x: number): Vector;
	setX(x: number): Vector;
	setX(x: number): Vector;
	setZ(z: number): Vector;
	setZ(z: number): Vector;
	setZ(z: number): Vector;
	getBlockX(): number;
	setY(y: number): Vector;
	setY(y: number): Vector;
	setY(y: number): Vector;
	lengthSquared(): number;
	getY(): number;
	getZ(): number;
	getBlockZ(): number;
	distanceSquared(o: Vector): number;
	getBlockY(): number;
	subtract(vec: Vector): Vector;
	getX(): number;
	checkFinite(): void;
	rotateAroundY(angle: number): Vector;
	midpoint(other: Vector): Vector;
	toLocation(world: World, yaw: number, pitch: number): Location;
	toLocation(world: World): Location;
	getMidpoint(other: Vector): Vector;
	rotateAroundAxis(axis: Vector, angle: number): Vector;
	rotateAroundZ(angle: number): Vector;
	toBlockVector(): BlockVector;
	crossProduct(o: Vector): Vector;
	rotateAroundX(angle: number): Vector;
	isInSphere(origin: Vector, radius: number): boolean;
	isInAABB(min: Vector, max: Vector): boolean;
	angle(other: Vector): number;
	getCrossProduct(o: Vector): Vector;
	rotateAroundNonUnitAxis(axis: Vector, angle: number): Vector;
}

export class BlockVector {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.BlockVector');
	}
	constructor(x: number, y: number, z: number);
	constructor(x: number, y: number, z: number);
	constructor(x: number, y: number, z: number);
	constructor(vec: Vector);
	constructor();
	constructor(...args: any[]) {
		return new BlockVector.$javaClass(...args);
	}
}

