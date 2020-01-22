declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerToggleFlightEvent extends PlayerEvent, Cancellable {
	isFlying(): boolean;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerToggleFlightEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerToggleFlightEvent');
	}
	constructor(player: Player, isFlying: boolean);
	constructor(...args: any[]) {
		return new PlayerToggleFlightEvent.$javaClass(...args);
	}
}

