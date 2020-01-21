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
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerPickupItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerPickupItemEvent');
	}
	constructor(player: Player, item: Item, remaining: number);
	constructor(...args: any[]) {
		return new PlayerPickupItemEvent.$javaClass(...args);
	}
}

