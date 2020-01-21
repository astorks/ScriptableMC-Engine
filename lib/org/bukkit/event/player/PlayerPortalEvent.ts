declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {PlayerTeleportEvent$TeleportCause} from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerTeleportEvent} from '../../../../org/bukkit/event/player/PlayerTeleportEvent.js'

export interface PlayerPortalEvent extends PlayerTeleportEvent {
	getHandlers(): HandlerList;
	setSearchRadius(searchRadius: number): void;
	getSearchRadius(): number;
	setCreationRadius(creationRadius: number): void;
	getCanCreatePortal(): boolean;
	setCanCreatePortal(canCreatePortal: boolean): void;
	getCreationRadius(): number;
	getCause(): PlayerTeleportEvent$TeleportCause;
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

export class PlayerPortalEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerPortalEvent');
	}
	constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause);
	constructor(player: Player, from: Location, to: Location);
	constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause, getSearchRadius: number, canCreatePortal: boolean, creationRadius: number);
	constructor(...args: any[]) {
		return new PlayerPortalEvent.$javaClass(...args);
	}
}

