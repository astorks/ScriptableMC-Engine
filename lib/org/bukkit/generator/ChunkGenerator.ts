declare var Java: any;
import {ChunkGenerator$ChunkData} from '../../../org/bukkit/generator/ChunkGenerator$ChunkData.js'
import {World} from '../../../org/bukkit/World.js'
import {ChunkGenerator$BiomeGrid} from '../../../org/bukkit/generator/ChunkGenerator$BiomeGrid.js'
import {Location} from '../../../org/bukkit/Location.js'

export interface ChunkGenerator {
	generateChunkData(world: World, random: any, x: number, z: number, biome: ChunkGenerator$BiomeGrid): ChunkGenerator$ChunkData;
	canSpawn(world: World, x: number, z: number): boolean;
	isParallelCapable(): boolean;
	getDefaultPopulators(world: World): any;
	getFixedSpawnLocation(world: World, random: any): Location;
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

