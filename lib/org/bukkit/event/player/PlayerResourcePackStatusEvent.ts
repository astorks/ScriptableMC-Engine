declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {PlayerResourcePackStatusEvent$Status} from '../../../../org/bukkit/event/player/PlayerResourcePackStatusEvent$Status.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerResourcePackStatusEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getStatus(): PlayerResourcePackStatusEvent$Status;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerResourcePackStatusEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerResourcePackStatusEvent');
	}
	constructor(who: Player, resourcePackStatus: PlayerResourcePackStatusEvent$Status);
	constructor(...args: any[]) {
		return new PlayerResourcePackStatusEvent.$javaClass(...args);
	}
}

