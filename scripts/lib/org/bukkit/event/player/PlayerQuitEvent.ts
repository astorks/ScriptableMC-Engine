declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerQuitEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getQuitMessage(): string;
	setQuitMessage(arg0: string): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerQuitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerQuitEvent');
	}
	constructor(arg0: Player, arg1: string) {
		return new PlayerQuitEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: string): PlayerQuitEvent {
		return new PlayerQuitEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerQuitEvent.$javaClass.getHandlerList();
	}
}

