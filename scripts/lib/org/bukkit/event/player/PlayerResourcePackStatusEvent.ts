declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {PlayerResourcePackStatusEvent$Status} from '../../../../org/bukkit/event/player/PlayerResourcePackStatusEvent$Status.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerResourcePackStatusEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getStatus(): PlayerResourcePackStatusEvent$Status;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerResourcePackStatusEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerResourcePackStatusEvent');
	}
	constructor(arg0: Player, arg1: PlayerResourcePackStatusEvent$Status) {
		return new PlayerResourcePackStatusEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: PlayerResourcePackStatusEvent$Status): PlayerResourcePackStatusEvent {
		return new PlayerResourcePackStatusEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerResourcePackStatusEvent.$javaClass.getHandlerList();
	}
}

