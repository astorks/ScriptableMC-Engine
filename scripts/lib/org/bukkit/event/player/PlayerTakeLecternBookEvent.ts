declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Lectern} from '../../../../org/bukkit/block/Lectern.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerTakeLecternBookEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getLectern(): Lectern;
	getBook(): ItemStack;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerTakeLecternBookEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerTakeLecternBookEvent');
	}
	constructor(arg0: Player, arg1: Lectern) {
		return new PlayerTakeLecternBookEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: Lectern): PlayerTakeLecternBookEvent {
		return new PlayerTakeLecternBookEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerTakeLecternBookEvent.$javaClass.getHandlerList();
	}
}

