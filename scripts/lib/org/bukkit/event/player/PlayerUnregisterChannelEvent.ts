declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerChannelEvent} from '../../../../org/bukkit/event/player/PlayerChannelEvent.js'

export interface PlayerUnregisterChannelEvent extends PlayerChannelEvent {
	getChannel(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerUnregisterChannelEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerUnregisterChannelEvent');
	}
	constructor(arg0: Player, arg1: string) {
		return new PlayerUnregisterChannelEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: string): PlayerUnregisterChannelEvent {
		return new PlayerUnregisterChannelEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerUnregisterChannelEvent.$javaClass.getHandlerList();
	}
}

