declare var Java: any;
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {World} from '../../org/bukkit/World.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'
import {BlockState} from '../../org/bukkit/block/BlockState.js'
import {ChunkSnapshot} from '../../org/bukkit/ChunkSnapshot.js'

export interface Chunk {
	contains(block: BlockData): boolean;
	load(): boolean;
	load(generate: boolean): boolean;
	unload(): boolean;
	unload(save: boolean): boolean;
	isLoaded(): boolean;
	getWorld(): World;
	getZ(): number;
	getX(): number;
	getBlock(x: number, y: number, z: number): Block;
	getEntities(): Array<Entity>;
	addPluginChunkTicket(plugin: Plugin): boolean;
	removePluginChunkTicket(plugin: Plugin): boolean;
	getPluginChunkTickets(): any;
	getInhabitedTime(): number;
	isSlimeChunk(): boolean;
	setForceLoaded(forced: boolean): void;
	getTileEntities(): Array<BlockState>;
	getChunkSnapshot(includeMaxblocky: boolean, includeBiome: boolean, includeBiomeTempRain: boolean): ChunkSnapshot;
	getChunkSnapshot(): ChunkSnapshot;
	isForceLoaded(): boolean;
	setInhabitedTime(ticks: number): void;
}

export class Chunk {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Chunk');
	}
}

