declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Chunk} from '../../../../org/bukkit/Chunk.js'
import {World} from '../../../../org/bukkit/World.js'
import {ChunkEvent} from '../../../../org/bukkit/event/world/ChunkEvent.js'

export interface ChunkLoadEvent extends ChunkEvent {
	getHandlers(): HandlerList;
	isNewChunk(): boolean;
	getChunk(): Chunk;
	getWorld(): World;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class ChunkLoadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.ChunkLoadEvent');
	}
	constructor(arg0: Chunk, arg1: boolean) {
		return new ChunkLoadEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Chunk, arg1: boolean): ChunkLoadEvent {
		return new ChunkLoadEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return ChunkLoadEvent.$javaClass.getHandlerList();
	}
}

