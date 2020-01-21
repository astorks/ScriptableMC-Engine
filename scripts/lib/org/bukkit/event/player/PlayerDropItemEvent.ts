declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerDropItemEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getItemDrop(): Item;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerDropItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerDropItemEvent');
	}
	constructor(arg0: Player, arg1: Item) {
		return new PlayerDropItemEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: Item): PlayerDropItemEvent {
		return new PlayerDropItemEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerDropItemEvent.$javaClass.getHandlerList();
	}
}

