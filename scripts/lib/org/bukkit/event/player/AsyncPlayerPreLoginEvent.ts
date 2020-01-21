declare var Java: any;
import {PlayerPreLoginEvent$Result} from '../../../../org/bukkit/event/player/PlayerPreLoginEvent$Result.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {AsyncPlayerPreLoginEvent$Result} from '../../../../org/bukkit/event/player/AsyncPlayerPreLoginEvent$Result.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface AsyncPlayerPreLoginEvent extends Event {
	getName(): string;
	getAddress(): any;
	getResult(): PlayerPreLoginEvent$Result;
	setResult(arg0: PlayerPreLoginEvent$Result): void;
	getHandlers(): HandlerList;
	getUniqueId(): string;
	setLoginResult(arg0: AsyncPlayerPreLoginEvent$Result): void;
	setKickMessage(arg0: string): void;
	getLoginResult(): AsyncPlayerPreLoginEvent$Result;
	allow(): void;
	getKickMessage(): string;
	disallow(arg0: AsyncPlayerPreLoginEvent$Result, arg1: string): void;
	disallow(arg0: PlayerPreLoginEvent$Result, arg1: string): void;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class AsyncPlayerPreLoginEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.AsyncPlayerPreLoginEvent');
	}
	constructor(arg0: string, arg1: any, arg2: string) {
		return new AsyncPlayerPreLoginEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: string, arg1: any, arg2: string): AsyncPlayerPreLoginEvent {
		return new AsyncPlayerPreLoginEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: string, arg1: any): AsyncPlayerPreLoginEvent {
		return new AsyncPlayerPreLoginEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return AsyncPlayerPreLoginEvent.$javaClass.getHandlerList();
	}
}

