declare var Java: any;
import {Vector} from '../../org/bukkit/util/Vector.js'
import {World} from '../../org/bukkit/World.js'
import {Chunk} from '../../org/bukkit/Chunk.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {ConfigurationSerializable} from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface Location extends ConfigurationSerializable {
	add(vec: Vector): Location;
	add(vec: Location): Location;
	add(x: number, y: number, z: number): Location;
	length(): number;
	clone(): Location;
	clone(): any;
	zero(): Location;
	distance(o: Location): number;
	multiply(m: number): Location;
	getWorld(): World;
	serialize(): any;
	setY(y: number): void;
	getBlockY(): number;
	getBlockZ(): number;
	getY(): number;
	setZ(z: number): void;
	getYaw(): number;
	subtract(x: number, y: number, z: number): Location;
	subtract(vec: Vector): Location;
	subtract(vec: Location): Location;
	distanceSquared(o: Location): number;
	toVector(): Vector;
	isWorldLoaded(): boolean;
	setPitch(pitch: number): void;
	setYaw(yaw: number): void;
	checkFinite(): void;
	setX(x: number): void;
	getChunk(): Chunk;
	getBlockX(): number;
	lengthSquared(): number;
	setDirection(vector: Vector): Location;
	getZ(): number;
	getPitch(): number;
	getDirection(): Vector;
	getX(): number;
	getBlock(): Block;
	setWorld(world: World): void;
}

export class Location {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Location');
	}
	constructor(world: World, x: number, y: number, z: number);
	constructor(world: World, x: number, y: number, z: number, yaw: number, pitch: number);
	constructor(...args: any[]) {
		return new Location.$javaClass(...args);
	}
}

