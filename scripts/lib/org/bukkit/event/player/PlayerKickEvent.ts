declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerKickEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getLeaveMessage(): string;
	setLeaveMessage(arg0: string): void;
	getReason(): string;
	setReason(arg0: string): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerKickEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerKickEvent');
	}
	constructor(arg0: Player, arg1: string, arg2: string) {
		return new PlayerKickEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Player, arg1: string, arg2: string): PlayerKickEvent {
		return new PlayerKickEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PlayerKickEvent.$javaClass.getHandlerList();
	}
}

