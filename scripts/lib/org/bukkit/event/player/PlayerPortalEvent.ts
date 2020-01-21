declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {PlayerTeleportEvent$TeleportCause} from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerTeleportEvent} from '../../../../org/bukkit/event/player/PlayerTeleportEvent.js'

export interface PlayerPortalEvent extends PlayerTeleportEvent {
	getHandlers(): HandlerList;
	getCanCreatePortal(): boolean;
	setCanCreatePortal(arg0: boolean): void;
	setCreationRadius(arg0: number): void;
	getCreationRadius(): number;
	setSearchRadius(arg0: number): void;
	getSearchRadius(): number;
	getCause(): PlayerTeleportEvent$TeleportCause;
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

export class PlayerPortalEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerPortalEvent');
	}
	constructor(arg0: Player, arg1: Location, arg2: Location, arg3: PlayerTeleportEvent$TeleportCause) {
		return new PlayerPortalEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: Player, arg1: Location, arg2: Location, arg3: PlayerTeleportEvent$TeleportCause): PlayerPortalEvent {
		return new PlayerPortalEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new1(arg0: Player, arg1: Location, arg2: Location): PlayerPortalEvent {
		return new PlayerPortalEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new2(arg0: Player, arg1: Location, arg2: Location, arg3: PlayerTeleportEvent$TeleportCause, arg4: number, arg5: boolean, arg6: number): PlayerPortalEvent {
		return new PlayerPortalEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
	}
	public static getHandlerList(): HandlerList {
		return PlayerPortalEvent.$javaClass.getHandlerList();
	}
}

