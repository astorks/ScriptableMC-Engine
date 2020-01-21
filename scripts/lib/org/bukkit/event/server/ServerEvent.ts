declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface ServerEvent extends Event {
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class ServerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerEvent');
	}
	constructor() {
		return new ServerEvent.$javaClass();
	}
	public static new0(): ServerEvent {
		return new ServerEvent.$javaClass();
	}
	public static new1(arg0: boolean): ServerEvent {
		return new ServerEvent.$javaClass(arg0);
	}
}

