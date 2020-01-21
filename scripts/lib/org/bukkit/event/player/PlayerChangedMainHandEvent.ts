declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {MainHand} from '../../../../org/bukkit/inventory/MainHand.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerChangedMainHandEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getMainHand(): MainHand;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerChangedMainHandEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerChangedMainHandEvent');
	}
	constructor(arg0: Player, arg1: MainHand) {
		return new PlayerChangedMainHandEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: MainHand): PlayerChangedMainHandEvent {
		return new PlayerChangedMainHandEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerChangedMainHandEvent.$javaClass.getHandlerList();
	}
}

