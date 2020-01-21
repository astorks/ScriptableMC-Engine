declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerItemHeldEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getNewSlot(): number;
	getPreviousSlot(): number;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerItemHeldEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemHeldEvent');
	}
	constructor(arg0: Player, arg1: number, arg2: number) {
		return new PlayerItemHeldEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Player, arg1: number, arg2: number): PlayerItemHeldEvent {
		return new PlayerItemHeldEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PlayerItemHeldEvent.$javaClass.getHandlerList();
	}
}

