declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerChannelEvent extends PlayerEvent {
	getChannel(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerChannelEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerChannelEvent');
	}
	constructor(player: Player, channel: string);
	constructor(...args: any[]) {
		return new PlayerChannelEvent.$javaClass(...args);
	}
}

