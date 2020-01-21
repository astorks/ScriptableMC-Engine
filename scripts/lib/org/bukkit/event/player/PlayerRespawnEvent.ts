declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerRespawnEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getRespawnLocation(): Location;
	setRespawnLocation(arg0: Location): void;
	isBedSpawn(): boolean;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerRespawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerRespawnEvent');
	}
	constructor(arg0: Player, arg1: Location, arg2: boolean) {
		return new PlayerRespawnEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Player, arg1: Location, arg2: boolean): PlayerRespawnEvent {
		return new PlayerRespawnEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PlayerRespawnEvent.$javaClass.getHandlerList();
	}
}

