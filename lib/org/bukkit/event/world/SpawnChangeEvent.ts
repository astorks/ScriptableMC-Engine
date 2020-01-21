declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {World} from '../../../../org/bukkit/World.js'
import {WorldEvent} from '../../../../org/bukkit/event/world/WorldEvent.js'

export interface SpawnChangeEvent extends WorldEvent {
	getHandlers(): HandlerList;
	getPreviousLocation(): Location;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class SpawnChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.SpawnChangeEvent');
	}
	constructor(world: World, previousLocation: Location);
	constructor(...args: any[]) {
		return new SpawnChangeEvent.$javaClass(...args);
	}
}

