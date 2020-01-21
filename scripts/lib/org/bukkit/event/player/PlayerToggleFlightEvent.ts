declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerToggleFlightEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isFlying(): boolean;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerToggleFlightEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerToggleFlightEvent');
	}
	constructor(arg0: Player, arg1: boolean) {
		return new PlayerToggleFlightEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: boolean): PlayerToggleFlightEvent {
		return new PlayerToggleFlightEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerToggleFlightEvent.$javaClass.getHandlerList();
	}
}

