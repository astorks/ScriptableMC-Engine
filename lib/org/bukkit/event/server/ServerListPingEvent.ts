declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {CachedServerIcon} from '../../../../org/bukkit/util/CachedServerIcon.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface ServerListPingEvent extends ServerEvent {
	iterator(): any;
	getAddress(): any;
	getMaxPlayers(): number;
	getMotd(): string;
	getHandlers(): HandlerList;
	setServerIcon(icon: CachedServerIcon): void;
	getNumPlayers(): number;
	setMaxPlayers(maxPlayers: number): void;
	setMotd(motd: string): void;
	getEventName(): string;
	isAsynchronous(): boolean;
	spliterator(): any;
	forEach(arg0: any): void;
}

export class ServerListPingEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerListPingEvent');
	}
	constructor(address: any, motd: string, numPlayers: number, maxPlayers: number);
	constructor(...args: any[]) {
		return new ServerListPingEvent.$javaClass(...args);
	}
}

