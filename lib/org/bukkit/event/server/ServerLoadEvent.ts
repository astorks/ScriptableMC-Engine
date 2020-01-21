declare var Java: any;
import {ServerLoadEvent$LoadType} from '../../../../org/bukkit/event/server/ServerLoadEvent$LoadType.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface ServerLoadEvent extends ServerEvent {
	getType(): ServerLoadEvent$LoadType;
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ServerLoadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerLoadEvent');
	}
	constructor(type: ServerLoadEvent$LoadType);
	constructor(...args: any[]) {
		return new ServerLoadEvent.$javaClass(...args);
	}
}

