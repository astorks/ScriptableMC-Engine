declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerExpChangeEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	setAmount(arg0: number): void;
	getAmount(): number;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerExpChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerExpChangeEvent');
	}
	constructor(arg0: Player, arg1: number) {
		return new PlayerExpChangeEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: number): PlayerExpChangeEvent {
		return new PlayerExpChangeEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerExpChangeEvent.$javaClass.getHandlerList();
	}
}

