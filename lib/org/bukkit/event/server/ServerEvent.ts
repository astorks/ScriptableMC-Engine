declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface ServerEvent extends Event {
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ServerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerEvent');
	}
	constructor();
	constructor(isAsync: boolean);
	constructor(...args: any[]) {
		return new ServerEvent.$javaClass(...args);
	}
}

