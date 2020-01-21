declare var Java: any;
import {PlayerTeleportEvent$TeleportCause} from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerMoveEvent} from '../../../../org/bukkit/event/player/PlayerMoveEvent.js'

export interface PlayerTeleportEvent extends PlayerMoveEvent {
	getCause(): PlayerTeleportEvent$TeleportCause;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getTo(): Location;
	getFrom(): Location;
	setFrom(from: Location): void;
	setTo(to: Location): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerTeleportEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerTeleportEvent');
	}
	constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause);
	constructor(player: Player, from: Location, to: Location);
	constructor(...args: any[]) {
		return new PlayerTeleportEvent.$javaClass(...args);
	}
}

