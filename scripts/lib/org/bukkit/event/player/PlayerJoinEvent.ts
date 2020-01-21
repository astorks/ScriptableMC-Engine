declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerJoinEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	setJoinMessage(arg0: string): void;
	getJoinMessage(): string;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerJoinEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerJoinEvent');
	}
	constructor(arg0: Player, arg1: string) {
		return new PlayerJoinEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: string): PlayerJoinEvent {
		return new PlayerJoinEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerJoinEvent.$javaClass.getHandlerList();
	}
}

