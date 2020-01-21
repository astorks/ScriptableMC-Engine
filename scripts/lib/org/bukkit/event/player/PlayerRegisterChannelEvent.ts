declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerChannelEvent} from '../../../../org/bukkit/event/player/PlayerChannelEvent.js'

export interface PlayerRegisterChannelEvent extends PlayerChannelEvent {
	getChannel(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerRegisterChannelEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerRegisterChannelEvent');
	}
	constructor(arg0: Player, arg1: string) {
		return new PlayerRegisterChannelEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: string): PlayerRegisterChannelEvent {
		return new PlayerRegisterChannelEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerRegisterChannelEvent.$javaClass.getHandlerList();
	}
}

