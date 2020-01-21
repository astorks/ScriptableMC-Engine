declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Chunk} from '../../../../org/bukkit/Chunk.js'
import {World} from '../../../../org/bukkit/World.js'
import {ChunkEvent} from '../../../../org/bukkit/event/world/ChunkEvent.js'

export interface ChunkUnloadEvent extends ChunkEvent {
	getHandlers(): HandlerList;
	isSaveChunk(): boolean;
	setSaveChunk(arg0: boolean): void;
	getChunk(): Chunk;
	getWorld(): World;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class ChunkUnloadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.ChunkUnloadEvent');
	}
	constructor(arg0: Chunk, arg1: boolean) {
		return new ChunkUnloadEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Chunk, arg1: boolean): ChunkUnloadEvent {
		return new ChunkUnloadEvent.$javaClass(arg0, arg1);
	}
	public static new1(arg0: Chunk): ChunkUnloadEvent {
		return new ChunkUnloadEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return ChunkUnloadEvent.$javaClass.getHandlerList();
	}
}

