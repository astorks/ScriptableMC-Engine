declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerMoveEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	setTo(arg0: Location): void;
	getTo(): Location;
	setFrom(arg0: Location): void;
	getFrom(): Location;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerMoveEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerMoveEvent');
	}
	constructor(arg0: Player, arg1: Location, arg2: Location) {
		return new PlayerMoveEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Player, arg1: Location, arg2: Location): PlayerMoveEvent {
		return new PlayerMoveEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PlayerMoveEvent.$javaClass.getHandlerList();
	}
}

