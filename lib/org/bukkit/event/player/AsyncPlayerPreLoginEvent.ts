declare var Java: any;
import {PlayerPreLoginEvent$Result} from '../../../../org/bukkit/event/player/PlayerPreLoginEvent$Result.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {AsyncPlayerPreLoginEvent$Result} from '../../../../org/bukkit/event/player/AsyncPlayerPreLoginEvent$Result.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface AsyncPlayerPreLoginEvent extends Event {
	getName(): string;
	getAddress(): any;
	setResult(result: PlayerPreLoginEvent$Result): void;
	getResult(): PlayerPreLoginEvent$Result;
	getUniqueId(): string;
	getHandlers(): HandlerList;
	setKickMessage(message: string): void;
	getLoginResult(): AsyncPlayerPreLoginEvent$Result;
	setLoginResult(result: AsyncPlayerPreLoginEvent$Result): void;
	allow(): void;
	disallow(result: PlayerPreLoginEvent$Result, message: string): void;
	disallow(result: AsyncPlayerPreLoginEvent$Result, message: string): void;
	getKickMessage(): string;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class AsyncPlayerPreLoginEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.AsyncPlayerPreLoginEvent');
	}
	constructor(_name: string, ipAddress: any, uniqueId: string);
	constructor(_name: string, ipAddress: any);
	constructor(...args: any[]) {
		return new AsyncPlayerPreLoginEvent.$javaClass(...args);
	}
}

