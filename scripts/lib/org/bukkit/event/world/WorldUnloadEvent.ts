declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {World} from '../../../../org/bukkit/World.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {WorldEvent} from '../../../../org/bukkit/event/world/WorldEvent.js'

export interface WorldUnloadEvent extends WorldEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getWorld(): World;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class WorldUnloadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.WorldUnloadEvent');
	}
	constructor(arg0: World) {
		return new WorldUnloadEvent.$javaClass(arg0);
	}
	public static new0(arg0: World): WorldUnloadEvent {
		return new WorldUnloadEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return WorldUnloadEvent.$javaClass.getHandlerList();
	}
}

