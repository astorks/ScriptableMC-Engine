declare var Java: any;
import {PlayerLoginEvent$Result} from '../../../../org/bukkit/event/player/PlayerLoginEvent$Result.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerLoginEvent extends PlayerEvent {
	getAddress(): any;
	setResult(result: PlayerLoginEvent$Result): void;
	getResult(): PlayerLoginEvent$Result;
	getHandlers(): HandlerList;
	setKickMessage(message: string): void;
	allow(): void;
	disallow(result: PlayerLoginEvent$Result, message: string): void;
	getKickMessage(): string;
	getHostname(): string;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerLoginEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerLoginEvent');
	}
	constructor(player: Player, hostname: string, address: any, result: PlayerLoginEvent$Result, message: string);
	constructor(player: Player, hostname: string, address: any);
	constructor(...args: any[]) {
		return new PlayerLoginEvent.$javaClass(...args);
	}
}

