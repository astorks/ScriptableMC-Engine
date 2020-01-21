declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerJoinEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getJoinMessage(): string;
	setJoinMessage(joinMessage: string): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerJoinEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerJoinEvent');
	}
	constructor(playerJoined: Player, joinMessage: string);
	constructor(...args: any[]) {
		return new PlayerJoinEvent.$javaClass(...args);
	}
}

