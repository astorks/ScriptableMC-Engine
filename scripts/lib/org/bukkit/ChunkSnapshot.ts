declare var Java: any;
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {Biome} from '../../org/bukkit/block/Biome.js'
import {Material} from '../../org/bukkit/Material.js'

export interface ChunkSnapshot {
	contains(arg0: BlockData): boolean;
	getHighestBlockYAt(arg0: number, arg1: number): number;
	getBiome(arg0: number, arg1: number): Biome;
	getBiome(arg0: number, arg1: number, arg2: number): Biome;
	getBlockType(arg0: number, arg1: number, arg2: number): Material;
	getCaptureFullTime(): number;
	getWorldName(): string;
	getBlockSkyLight(arg0: number, arg1: number, arg2: number): number;
	isSectionEmpty(arg0: number): boolean;
	getX(): number;
	getZ(): number;
	getData(arg0: number, arg1: number, arg2: number): number;
	getBlockData(arg0: number, arg1: number, arg2: number): BlockData;
	getRawBiomeTemperature(arg0: number, arg1: number, arg2: number): number;
	getRawBiomeTemperature(arg0: number, arg1: number): number;
	getBlockEmittedLight(arg0: number, arg1: number, arg2: number): number;
}

export class ChunkSnapshot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.ChunkSnapshot');
	}
}

