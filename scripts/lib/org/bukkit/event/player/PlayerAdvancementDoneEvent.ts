declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Advancement} from '../../../../org/bukkit/advancement/Advancement.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerAdvancementDoneEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getAdvancement(): Advancement;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerAdvancementDoneEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerAdvancementDoneEvent');
	}
	constructor(arg0: Player, arg1: Advancement) {
		return new PlayerAdvancementDoneEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: Advancement): PlayerAdvancementDoneEvent {
		return new PlayerAdvancementDoneEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerAdvancementDoneEvent.$javaClass.getHandlerList();
	}
}

