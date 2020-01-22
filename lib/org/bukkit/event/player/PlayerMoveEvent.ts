declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerMoveEvent extends PlayerEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getTo(): Location;
	setTo(to: Location): void;
	getFrom(): Location;
	setFrom(from: Location): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerMoveEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerMoveEvent');
	}
	constructor(player: Player, from: Location, to: Location);
	constructor(...args: any[]) {
		return new PlayerMoveEvent.$javaClass(...args);
	}
}

