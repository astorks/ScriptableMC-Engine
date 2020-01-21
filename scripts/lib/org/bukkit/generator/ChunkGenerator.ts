declare var Java: any;
import {ChunkGenerator$ChunkData} from '../../../org/bukkit/generator/ChunkGenerator$ChunkData.js'
import {World} from '../../../org/bukkit/World.js'
import {ChunkGenerator$BiomeGrid} from '../../../org/bukkit/generator/ChunkGenerator$BiomeGrid.js'
import {Location} from '../../../org/bukkit/Location.js'

export interface ChunkGenerator {
	isParallelCapable(): boolean;
	generateChunkData(arg0: World, arg1: any, arg2: number, arg3: number, arg4: ChunkGenerator$BiomeGrid): ChunkGenerator$ChunkData;
	canSpawn(arg0: World, arg1: number, arg2: number): boolean;
	getFixedSpawnLocation(arg0: World, arg1: any): Location;
	getDefaultPopulators(arg0: World): any;
}

export class ChunkGenerator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.generator.ChunkGenerator');
	}
	constructor() {
		return new ChunkGenerator.$javaClass();
	}
	public static new0(): ChunkGenerator {
		return new ChunkGenerator.$javaClass();
	}
}

