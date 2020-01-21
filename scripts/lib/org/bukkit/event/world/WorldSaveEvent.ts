declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {World} from '../../../../org/bukkit/World.js'
import {WorldEvent} from '../../../../org/bukkit/event/world/WorldEvent.js'

export interface WorldSaveEvent extends WorldEvent {
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class WorldSaveEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.WorldSaveEvent');
	}
	constructor(arg0: World) {
		return new WorldSaveEvent.$javaClass(arg0);
	}
	public static new0(arg0: World): WorldSaveEvent {
		return new WorldSaveEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return WorldSaveEvent.$javaClass.getHandlerList();
	}
}

