declare var Java: any;
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'
import {World} from '../../org/bukkit/World.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {ChunkSnapshot} from '../../org/bukkit/ChunkSnapshot.js'
import {BlockState} from '../../org/bukkit/block/BlockState.js'

export interface Chunk {
	contains(arg0: BlockData): boolean;
	load(arg0: boolean): boolean;
	load(): boolean;
	isLoaded(): boolean;
	unload(): boolean;
	unload(arg0: boolean): boolean;
	addPluginChunkTicket(arg0: Plugin): boolean;
	removePluginChunkTicket(arg0: Plugin): boolean;
	getPluginChunkTickets(): any;
	getWorld(): World;
	getBlock(arg0: number, arg1: number, arg2: number): Block;
	getEntities(): Array<Entity>;
	getX(): number;
	getZ(): number;
	getChunkSnapshot(): ChunkSnapshot;
	getChunkSnapshot(arg0: boolean, arg1: boolean, arg2: boolean): ChunkSnapshot;
	setInhabitedTime(arg0: number): void;
	getInhabitedTime(): number;
	getTileEntities(): Array<BlockState>;
	isSlimeChunk(): boolean;
	isForceLoaded(): boolean;
	setForceLoaded(arg0: boolean): void;
}

export class Chunk {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Chunk');
	}
}

