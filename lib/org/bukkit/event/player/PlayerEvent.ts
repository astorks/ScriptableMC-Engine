declare var Java: any;
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface PlayerEvent extends Event {
	getPlayer(): Player;
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerEvent');
	}
	constructor(who: Player);
	constructor(...args: any[]) {
		return new PlayerEvent.$javaClass(...args);
	}
}

