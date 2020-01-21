declare var Java: any;
import {World} from '../../../../org/bukkit/World.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface WorldEvent extends Event {
	getWorld(): World;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class WorldEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.WorldEvent');
	}
	constructor(arg0: World) {
		return new WorldEvent.$javaClass(arg0);
	}
	public static new0(arg0: World): WorldEvent {
		return new WorldEvent.$javaClass(arg0);
	}
}

