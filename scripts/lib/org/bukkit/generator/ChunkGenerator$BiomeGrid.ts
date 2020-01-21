declare var Java: any;
import {Biome} from '../../../org/bukkit/block/Biome.js'

export interface ChunkGenerator$BiomeGrid {
	setBiome(arg0: number, arg1: number, arg2: number, arg3: Biome): void;
	setBiome(arg0: number, arg1: number, arg2: Biome): void;
	getBiome(arg0: number, arg1: number, arg2: number): Biome;
	getBiome(arg0: number, arg1: number): Biome;
}

export class ChunkGenerator$BiomeGrid {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.generator.ChunkGenerator$BiomeGrid');
	}
}

