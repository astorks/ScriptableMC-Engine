declare var Java: any;
import {AbstractArrow} from '../../../../org/bukkit/entity/AbstractArrow.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerPickupItemEvent} from '../../../../org/bukkit/event/player/PlayerPickupItemEvent.js'

export interface PlayerPickupArrowEvent extends PlayerPickupItemEvent {
	getArrow(): AbstractArrow;
	getHandlers(): HandlerList;
	getRemaining(): number;
	getItem(): Item;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerPickupArrowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerPickupArrowEvent');
	}
	constructor(arg0: Player, arg1: Item, arg2: AbstractArrow) {
		return new PlayerPickupArrowEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Player, arg1: Item, arg2: AbstractArrow): PlayerPickupArrowEvent {
		return new PlayerPickupArrowEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PlayerPickupArrowEvent.$javaClass.getHandlerList();
	}
}

