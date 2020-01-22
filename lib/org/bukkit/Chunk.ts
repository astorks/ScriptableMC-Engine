declare var Java: any;
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {World} from '../../org/bukkit/World.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {BlockState} from '../../org/bukkit/block/BlockState.js'
import {ChunkSnapshot} from '../../org/bukkit/ChunkSnapshot.js'
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'

export interface Chunk {
	contains(block: BlockData): boolean;
	load(): boolean;
	load(generate: boolean): boolean;
	unload(): boolean;
	unload(save: boolean): boolean;
	isLoaded(): boolean;
	getWorld(): World;
	getBlock(x: number, y: number, z: number): Block;
	getZ(): number;
	getX(): number;
	isSlimeChunk(): boolean;
	getTileEntities(): Array<BlockState>;
	getChunkSnapshot(includeMaxblocky: boolean, includeBiome: boolean, includeBiomeTempRain: boolean): ChunkSnapshot;
	getChunkSnapshot(): ChunkSnapshot;
	setInhabitedTime(ticks: number): void;
	isForceLoaded(): boolean;
	setForceLoaded(forced: boolean): void;
	getInhabitedTime(): number;
	addPluginChunkTicket(plugin: Plugin): boolean;
	getPluginChunkTickets(): any;
	removePluginChunkTicket(plugin: Plugin): boolean;
	getEntities(): Array<Entity>;
}

export class Chunk {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Chunk');
	}
}

