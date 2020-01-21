declare var Java: any;
import {Chunk} from '../../../../org/bukkit/Chunk.js'
import {World} from '../../../../org/bukkit/World.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {WorldEvent} from '../../../../org/bukkit/event/world/WorldEvent.js'

export interface ChunkEvent extends WorldEvent {
	getChunk(): Chunk;
	getWorld(): World;
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ChunkEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.ChunkEvent');
	}
}

