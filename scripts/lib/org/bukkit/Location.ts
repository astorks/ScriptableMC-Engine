declare var Java: any;
import {Vector} from '../../org/bukkit/util/Vector.js'
import {World} from '../../org/bukkit/World.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {Chunk} from '../../org/bukkit/Chunk.js'
import {ConfigurationSerializable} from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface Location extends ConfigurationSerializable {
	add(arg0: Vector): Location;
	add(arg0: Location): Location;
	add(arg0: number, arg1: number, arg2: number): Location;
	length(): number;
	clone(): Location;
	clone(): any;
	zero(): Location;
	distance(arg0: Location): number;
	multiply(arg0: number): Location;
	getWorld(): World;
	getBlock(): Block;
	setWorld(arg0: World): void;
	serialize(): any;
	isWorldLoaded(): boolean;
	getChunk(): Chunk;
	setY(arg0: number): void;
	getY(): number;
	getBlockY(): number;
	setX(arg0: number): void;
	setZ(arg0: number): void;
	getX(): number;
	getBlockX(): number;
	getZ(): number;
	getBlockZ(): number;
	setYaw(arg0: number): void;
	setDirection(arg0: Vector): Location;
	subtract(arg0: Vector): Location;
	subtract(arg0: number, arg1: number, arg2: number): Location;
	subtract(arg0: Location): Location;
	getYaw(): number;
	lengthSquared(): number;
	setPitch(arg0: number): void;
	toVector(): Vector;
	getDirection(): Vector;
	checkFinite(): void;
	distanceSquared(arg0: Location): number;
	getPitch(): number;
}

export class Location {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Location');
	}
	constructor(arg0: World, arg1: number, arg2: number, arg3: number) {
		return new Location.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: World, arg1: number, arg2: number, arg3: number): Location {
		return new Location.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new1(arg0: World, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Location {
		return new Location.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static locToBlock(arg0: number): number {
		return Location.$javaClass.locToBlock(arg0);
	}
	public static normalizePitch(arg0: number): number {
		return Location.$javaClass.normalizePitch(arg0);
	}
	public static deserialize(arg0: any): Location {
		return Location.$javaClass.deserialize(arg0);
	}
	public static normalizeYaw(arg0: number): number {
		return Location.$javaClass.normalizeYaw(arg0);
	}
}

