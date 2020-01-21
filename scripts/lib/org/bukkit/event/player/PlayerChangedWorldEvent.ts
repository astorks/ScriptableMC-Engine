declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {World} from '../../../../org/bukkit/World.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerChangedWorldEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getFrom(): World;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerChangedWorldEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerChangedWorldEvent');
	}
	constructor(arg0: Player, arg1: World) {
		return new PlayerChangedWorldEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: World): PlayerChangedWorldEvent {
		return new PlayerChangedWorldEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerChangedWorldEvent.$javaClass.getHandlerList();
	}
}

