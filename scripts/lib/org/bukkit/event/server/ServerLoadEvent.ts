declare var Java: any;
import {ServerLoadEvent$LoadType} from '../../../../org/bukkit/event/server/ServerLoadEvent$LoadType.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface ServerLoadEvent extends ServerEvent {
	getType(): ServerLoadEvent$LoadType;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class ServerLoadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerLoadEvent');
	}
	constructor(arg0: ServerLoadEvent$LoadType) {
		return new ServerLoadEvent.$javaClass(arg0);
	}
	public static new0(arg0: ServerLoadEvent$LoadType): ServerLoadEvent {
		return new ServerLoadEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return ServerLoadEvent.$javaClass.getHandlerList();
	}
}

