declare var Java: any;
import {HandlerList} from '../../../org/bukkit/event/HandlerList.js'

export interface Event {
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class Event {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.Event');
	}
	constructor() {
		return new Event.$javaClass();
	}
	public static new0(): Event {
		return new Event.$javaClass();
	}
	public static new1(arg0: boolean): Event {
		return new Event.$javaClass(arg0);
	}
}

