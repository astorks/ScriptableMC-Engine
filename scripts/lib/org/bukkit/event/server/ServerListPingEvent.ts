declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {CachedServerIcon} from '../../../../org/bukkit/util/CachedServerIcon.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface ServerListPingEvent extends ServerEvent {
	iterator(): any;
	getAddress(): any;
	getHandlers(): HandlerList;
	getMaxPlayers(): number;
	getMotd(): string;
	setMotd(arg0: string): void;
	setMaxPlayers(arg0: number): void;
	getNumPlayers(): number;
	setServerIcon(arg0: CachedServerIcon): void;
	isAsynchronous(): boolean;
	getEventName(): string;
	spliterator(): any;
	forEach(arg0: any): void;
}

export class ServerListPingEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerListPingEvent');
	}
	constructor(arg0: any, arg1: string, arg2: number, arg3: number) {
		return new ServerListPingEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: any, arg1: string, arg2: number, arg3: number): ServerListPingEvent {
		return new ServerListPingEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static getHandlerList(): HandlerList {
		return ServerListPingEvent.$javaClass.getHandlerList();
	}
}

