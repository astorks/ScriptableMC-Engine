declare var Java: any;
import {World} from '../../../org/bukkit/World.js'
import {ChunkGenerator$ChunkData} from '../../../org/bukkit/generator/ChunkGenerator$ChunkData.js'
import {ChunkGenerator$BiomeGrid} from '../../../org/bukkit/generator/ChunkGenerator$BiomeGrid.js'
import {Location} from '../../../org/bukkit/Location.js'

export interface ChunkGenerator {
	canSpawn(world: World, x: number, z: number): boolean;
	isParallelCapable(): boolean;
	generateChunkData(world: World, random: any, x: number, z: number, biome: ChunkGenerator$BiomeGrid): ChunkGenerator$ChunkData;
	getFixedSpawnLocation(world: World, random: any): Location;
	getDefaultPopulators(world: World): any;
}

export class ChunkGenerator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.generator.ChunkGenerator');
	}
	constructor();
	constructor(...args: any[]) {
		return new ChunkGenerator.$javaClass(...args);
	}
}

