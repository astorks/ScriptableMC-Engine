declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {World} from '../../../../org/bukkit/World.js'
import {WorldEvent} from '../../../../org/bukkit/event/world/WorldEvent.js'

export interface WorldLoadEvent extends WorldEvent {
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class WorldLoadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.WorldLoadEvent');
	}
	constructor(arg0: World) {
		return new WorldLoadEvent.$javaClass(arg0);
	}
	public static new0(arg0: World): WorldLoadEvent {
		return new WorldLoadEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return WorldLoadEvent.$javaClass.getHandlerList();
	}
}

