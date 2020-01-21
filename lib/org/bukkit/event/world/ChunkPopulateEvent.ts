declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Chunk} from '../../../../org/bukkit/Chunk.js'
import {World} from '../../../../org/bukkit/World.js'
import {ChunkEvent} from '../../../../org/bukkit/event/world/ChunkEvent.js'

export interface ChunkPopulateEvent extends ChunkEvent {
	getHandlers(): HandlerList;
	getChunk(): Chunk;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ChunkPopulateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.ChunkPopulateEvent');
	}
	constructor(chunk: Chunk);
	constructor(...args: any[]) {
		return new ChunkPopulateEvent.$javaClass(...args);
	}
}

