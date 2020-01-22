declare var Java: any;
import {Vector} from '../../org/bukkit/util/Vector.js'
import {World} from '../../org/bukkit/World.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {Chunk} from '../../org/bukkit/Chunk.js'
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
	getBlock(): Block;
	serialize(): any;
	setWorld(world: World): void;
	setPitch(pitch: number): void;
	setDirection(vector: Vector): Location;
	setX(x: number): void;
	setZ(z: number): void;
	getBlockX(): number;
	setY(y: number): void;
	getYaw(): number;
	lengthSquared(): number;
	isWorldLoaded(): boolean;
	getChunk(): Chunk;
	getY(): number;
	getZ(): number;
	getBlockZ(): number;
	getPitch(): number;
	setYaw(yaw: number): void;
	distanceSquared(o: Location): number;
	getBlockY(): number;
	subtract(vec: Vector): Location;
	subtract(vec: Location): Location;
	subtract(x: number, y: number, z: number): Location;
	getDirection(): Vector;
	getX(): number;
	checkFinite(): void;
	toVector(): Vector;
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

