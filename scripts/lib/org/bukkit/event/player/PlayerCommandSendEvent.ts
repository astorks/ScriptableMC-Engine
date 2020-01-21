declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerCommandSendEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getCommands(): any;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerCommandSendEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerCommandSendEvent');
	}
	constructor(arg0: Player, arg1: any) {
		return new PlayerCommandSendEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: any): PlayerCommandSendEvent {
		return new PlayerCommandSendEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerCommandSendEvent.$javaClass.getHandlerList();
	}
}

