declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerCommandSendEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getCommands(): any;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerCommandSendEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerCommandSendEvent');
	}
	constructor(player: Player, commands: any);
	constructor(...args: any[]) {
		return new PlayerCommandSendEvent.$javaClass(...args);
	}
}

