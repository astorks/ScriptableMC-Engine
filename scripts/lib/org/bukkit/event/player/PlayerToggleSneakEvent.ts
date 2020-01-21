declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerToggleSneakEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isSneaking(): boolean;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerToggleSneakEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerToggleSneakEvent');
	}
	constructor(arg0: Player, arg1: boolean) {
		return new PlayerToggleSneakEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: boolean): PlayerToggleSneakEvent {
		return new PlayerToggleSneakEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerToggleSneakEvent.$javaClass.getHandlerList();
	}
}

