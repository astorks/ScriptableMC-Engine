declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerLocaleChangeEvent extends PlayerEvent {
	getLocale(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerLocaleChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerLocaleChangeEvent');
	}
	constructor(who: Player, locale: string);
	constructor(...args: any[]) {
		return new PlayerLocaleChangeEvent.$javaClass(...args);
	}
}

