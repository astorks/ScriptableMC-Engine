declare var Java: any;
import {MainHand} from '../../../../org/bukkit/inventory/MainHand.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerChangedMainHandEvent extends PlayerEvent {
	getMainHand(): MainHand;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerChangedMainHandEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerChangedMainHandEvent');
	}
	constructor(who: Player, mainHand: MainHand);
	constructor(...args: any[]) {
		return new PlayerChangedMainHandEvent.$javaClass(...args);
	}
}

