declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerLevelChangeEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getNewLevel(): number;
	getOldLevel(): number;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerLevelChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerLevelChangeEvent');
	}
	constructor(player: Player, oldLevel: number, newLevel: number);
	constructor(...args: any[]) {
		return new PlayerLevelChangeEvent.$javaClass(...args);
	}
}

