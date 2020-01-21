declare var Java: any;
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {Biome} from '../../org/bukkit/block/Biome.js'
import {Material} from '../../org/bukkit/Material.js'

export interface ChunkSnapshot {
	contains(block: BlockData): boolean;
	getZ(): number;
	getX(): number;
	getData(x: number, y: number, z: number): number;
	getHighestBlockYAt(x: number, z: number): number;
	getBiome(x: number, y: number, z: number): Biome;
	getBiome(x: number, z: number): Biome;
	getBlockSkyLight(x: number, y: number, z: number): number;
	getBlockType(x: number, y: number, z: number): Material;
	getCaptureFullTime(): number;
	getWorldName(): string;
	isSectionEmpty(sy: number): boolean;
	getBlockData(x: number, y: number, z: number): BlockData;
	getBlockEmittedLight(x: number, y: number, z: number): number;
	getRawBiomeTemperature(x: number, y: number, z: number): number;
	getRawBiomeTemperature(x: number, z: number): number;
}

export class ChunkSnapshot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.ChunkSnapshot');
	}
}

