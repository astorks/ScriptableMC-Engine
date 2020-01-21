declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerLevelChangeEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getOldLevel(): number;
	getNewLevel(): number;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerLevelChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerLevelChangeEvent');
	}
	constructor(arg0: Player, arg1: number, arg2: number) {
		return new PlayerLevelChangeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Player, arg1: number, arg2: number): PlayerLevelChangeEvent {
		return new PlayerLevelChangeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PlayerLevelChangeEvent.$javaClass.getHandlerList();
	}
}

