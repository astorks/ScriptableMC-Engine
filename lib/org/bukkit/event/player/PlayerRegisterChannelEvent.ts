declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerChannelEvent} from '../../../../org/bukkit/event/player/PlayerChannelEvent.js'

export interface PlayerRegisterChannelEvent extends PlayerChannelEvent {
	getChannel(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerRegisterChannelEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerRegisterChannelEvent');
	}
	constructor(player: Player, channel: string);
	constructor(...args: any[]) {
		return new PlayerRegisterChannelEvent.$javaClass(...args);
	}
}

