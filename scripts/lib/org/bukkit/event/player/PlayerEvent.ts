declare var Java: any;
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface PlayerEvent extends Event {
	getPlayer(): Player;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerEvent');
	}
	constructor(arg0: Player) {
		return new PlayerEvent.$javaClass(arg0);
	}
	public static new0(arg0: Player): PlayerEvent {
		return new PlayerEvent.$javaClass(arg0);
	}
}

