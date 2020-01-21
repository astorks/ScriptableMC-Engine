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
	serialize(): any;
	setY(y: number): Vector;
	setY(y: number): Vector;
	setY(y: number): Vector;
	getBlockY(): number;
	getBlockZ(): number;
	getY(): number;
	setZ(z: number): Vector;
	setZ(z: number): Vector;
	setZ(z: number): Vector;
	subtract(vec: Vector): Vector;
	distanceSquared(o: Vector): number;
	checkFinite(): void;
	setX(x: number): Vector;
	setX(x: number): Vector;
	setX(x: number): Vector;
	getBlockX(): number;
	lengthSquared(): number;
	getZ(): number;
	getX(): number;
	isNormalized(): boolean;
	toLocation(world: World, yaw: number, pitch: number): Location;
	toLocation(world: World): Location;
	getCrossProduct(o: Vector): Vector;
	midpoint(other: Vector): Vector;
	rotateAroundZ(angle: number): Vector;
	angle(other: Vector): number;
	rotateAroundAxis(axis: Vector, angle: number): Vector;
	crossProduct(o: Vector): Vector;
	getMidpoint(other: Vector): Vector;
	rotateAroundX(angle: number): Vector;
	isInAABB(min: Vector, max: Vector): boolean;
	rotateAroundY(angle: number): Vector;
	isInSphere(origin: Vector, radius: number): boolean;
	toBlockVector(): BlockVector;
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

