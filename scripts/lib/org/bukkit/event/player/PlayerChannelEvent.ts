declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerChannelEvent extends PlayerEvent {
	getChannel(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerChannelEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerChannelEvent');
	}
	constructor(arg0: Player, arg1: string) {
		return new PlayerChannelEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: string): PlayerChannelEvent {
		return new PlayerChannelEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerChannelEvent.$javaClass.getHandlerList();
	}
}

