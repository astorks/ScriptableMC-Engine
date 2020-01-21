declare var Java: any;
import {Biome} from '../../../org/bukkit/block/Biome.js'

export interface ChunkGenerator$BiomeGrid {
	setBiome(x: number, y: number, z: number, bio: Biome): void;
	setBiome(x: number, z: number, bio: Biome): void;
	getBiome(x: number, y: number, z: number): Biome;
	getBiome(x: number, z: number): Biome;
}

export class ChunkGenerator$BiomeGrid {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.generator.ChunkGenerator$BiomeGrid');
	}
}

