declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BookMeta} from '../../../../org/bukkit/inventory/meta/BookMeta.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerEditBookEvent extends PlayerEvent, Cancellable {
	getSlot(): number;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getPreviousBookMeta(): BookMeta;
	getNewBookMeta(): BookMeta;
	setNewBookMeta(arg0: BookMeta): void;
	setSigning(arg0: boolean): void;
	isSigning(): boolean;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerEditBookEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerEditBookEvent');
	}
	constructor(arg0: Player, arg1: number, arg2: BookMeta, arg3: BookMeta, arg4: boolean) {
		return new PlayerEditBookEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new0(arg0: Player, arg1: number, arg2: BookMeta, arg3: BookMeta, arg4: boolean): PlayerEditBookEvent {
		return new PlayerEditBookEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static getHandlerList(): HandlerList {
		return PlayerEditBookEvent.$javaClass.getHandlerList();
	}
}

