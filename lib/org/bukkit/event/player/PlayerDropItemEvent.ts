declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerDropItemEvent extends PlayerEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getItemDrop(): Item;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerDropItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerDropItemEvent');
	}
	constructor(player: Player, drop: Item);
	constructor(...args: any[]) {
		return new PlayerDropItemEvent.$javaClass(...args);
	}
}

