declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerItemHeldEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getPreviousSlot(): number;
	getNewSlot(): number;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerItemHeldEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemHeldEvent');
	}
	constructor(player: Player, previous: number, current: number);
	constructor(...args: any[]) {
		return new PlayerItemHeldEvent.$javaClass(...args);
	}
}

