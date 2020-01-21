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
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerPickupArrowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerPickupArrowEvent');
	}
	constructor(player: Player, item: Item, arrow: AbstractArrow);
	constructor(...args: any[]) {
		return new PlayerPickupArrowEvent.$javaClass(...args);
	}
}

