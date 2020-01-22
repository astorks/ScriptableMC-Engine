declare var Java: any;
import {Advancement} from '../../../../org/bukkit/advancement/Advancement.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerAdvancementDoneEvent extends PlayerEvent {
	getAdvancement(): Advancement;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerAdvancementDoneEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerAdvancementDoneEvent');
	}
	constructor(who: Player, advancement: Advancement);
	constructor(...args: any[]) {
		return new PlayerAdvancementDoneEvent.$javaClass(...args);
	}
}

