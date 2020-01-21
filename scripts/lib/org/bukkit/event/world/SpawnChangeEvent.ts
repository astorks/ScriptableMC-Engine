declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {World} from '../../../../org/bukkit/World.js'
import {WorldEvent} from '../../../../org/bukkit/event/world/WorldEvent.js'

export interface SpawnChangeEvent extends WorldEvent {
	getHandlers(): HandlerList;
	getPreviousLocation(): Location;
	getWorld(): World;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class SpawnChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.SpawnChangeEvent');
	}
	constructor(arg0: World, arg1: Location) {
		return new SpawnChangeEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: World, arg1: Location): SpawnChangeEvent {
		return new SpawnChangeEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return SpawnChangeEvent.$javaClass.getHandlerList();
	}
}

