declare var Java: any;
import {World} from '../../../../org/bukkit/World.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface WorldEvent extends Event {
	getWorld(): World;
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class WorldEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.WorldEvent');
	}
	constructor(world: World);
	constructor(...args: any[]) {
		return new WorldEvent.$javaClass(...args);
	}
}

