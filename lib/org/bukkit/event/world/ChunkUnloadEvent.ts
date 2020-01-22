declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Chunk} from '../../../../org/bukkit/Chunk.js'
import {World} from '../../../../org/bukkit/World.js'
import {ChunkEvent} from '../../../../org/bukkit/event/world/ChunkEvent.js'

export interface ChunkUnloadEvent extends ChunkEvent {
	getHandlers(): HandlerList;
	isSaveChunk(): boolean;
	setSaveChunk(saveChunk: boolean): void;
	getChunk(): Chunk;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ChunkUnloadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.ChunkUnloadEvent');
	}
	constructor(chunk: Chunk, save: boolean);
	constructor(chunk: Chunk);
	constructor(...args: any[]) {
		return new ChunkUnloadEvent.$javaClass(...args);
	}
}

