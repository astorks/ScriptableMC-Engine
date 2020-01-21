declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Chunk} from '../../../../org/bukkit/Chunk.js'
import {World} from '../../../../org/bukkit/World.js'
import {ChunkEvent} from '../../../../org/bukkit/event/world/ChunkEvent.js'

export interface ChunkPopulateEvent extends ChunkEvent {
	getHandlers(): HandlerList;
	getChunk(): Chunk;
	getWorld(): World;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class ChunkPopulateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.ChunkPopulateEvent');
	}
	constructor(arg0: Chunk) {
		return new ChunkPopulateEvent.$javaClass(arg0);
	}
	public static new0(arg0: Chunk): ChunkPopulateEvent {
		return new ChunkPopulateEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return ChunkPopulateEvent.$javaClass.getHandlerList();
	}
}

