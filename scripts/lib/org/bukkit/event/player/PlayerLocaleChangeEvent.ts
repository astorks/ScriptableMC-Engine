declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerLocaleChangeEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getLocale(): string;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerLocaleChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerLocaleChangeEvent');
	}
	constructor(arg0: Player, arg1: string) {
		return new PlayerLocaleChangeEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: string): PlayerLocaleChangeEvent {
		return new PlayerLocaleChangeEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerLocaleChangeEvent.$javaClass.getHandlerList();
	}
}

