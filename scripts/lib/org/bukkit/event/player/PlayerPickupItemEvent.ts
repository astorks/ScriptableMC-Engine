declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerPickupItemEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	getRemaining(): number;
	getItem(): Item;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerPickupItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerPickupItemEvent');
	}
	constructor(arg0: Player, arg1: Item, arg2: number) {
		return new PlayerPickupItemEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Player, arg1: Item, arg2: number): PlayerPickupItemEvent {
		return new PlayerPickupItemEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PlayerPickupItemEvent.$javaClass.getHandlerList();
	}
}

