declare var Java: any;
import {PlayerLoginEvent$Result} from '../../../../org/bukkit/event/player/PlayerLoginEvent$Result.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerLoginEvent extends PlayerEvent {
	getAddress(): any;
	getResult(): PlayerLoginEvent$Result;
	setResult(arg0: PlayerLoginEvent$Result): void;
	getHandlers(): HandlerList;
	setKickMessage(arg0: string): void;
	allow(): void;
	getKickMessage(): string;
	disallow(arg0: PlayerLoginEvent$Result, arg1: string): void;
	getHostname(): string;
	getRealAddress(): any;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerLoginEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerLoginEvent');
	}
	constructor(arg0: Player, arg1: string, arg2: any) {
		return new PlayerLoginEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Player, arg1: string, arg2: any): PlayerLoginEvent {
		return new PlayerLoginEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: Player, arg1: string, arg2: any, arg3: any): PlayerLoginEvent {
		return new PlayerLoginEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new2(arg0: Player, arg1: string, arg2: any, arg3: PlayerLoginEvent$Result, arg4: string, arg5: any): PlayerLoginEvent {
		return new PlayerLoginEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static getHandlerList(): HandlerList {
		return PlayerLoginEvent.$javaClass.getHandlerList();
	}
}

