declare var Java: any;
import {PlayerTeleportEvent$TeleportCause} from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerMoveEvent} from '../../../../org/bukkit/event/player/PlayerMoveEvent.js'

export interface PlayerTeleportEvent extends PlayerMoveEvent {
	getCause(): PlayerTeleportEvent$TeleportCause;
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

export class PlayerTeleportEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerTeleportEvent');
	}
	constructor(arg0: Player, arg1: Location, arg2: Location, arg3: PlayerTeleportEvent$TeleportCause) {
		return new PlayerTeleportEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: Player, arg1: Location, arg2: Location, arg3: PlayerTeleportEvent$TeleportCause): PlayerTeleportEvent {
		return new PlayerTeleportEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new1(arg0: Player, arg1: Location, arg2: Location): PlayerTeleportEvent {
		return new PlayerTeleportEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PlayerTeleportEvent.$javaClass.getHandlerList();
	}
}

