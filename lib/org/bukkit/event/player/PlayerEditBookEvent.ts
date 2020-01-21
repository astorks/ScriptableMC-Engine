declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BookMeta} from '../../../../org/bukkit/inventory/meta/BookMeta.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerEditBookEvent extends PlayerEvent, Cancellable {
	getSlot(): number;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getPreviousBookMeta(): BookMeta;
	setSigning(signing: boolean): void;
	setNewBookMeta(newBookMeta: BookMeta): void;
	getNewBookMeta(): BookMeta;
	isSigning(): boolean;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerEditBookEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerEditBookEvent');
	}
	constructor(who: Player, slot: number, previousBookMeta: BookMeta, newBookMeta: BookMeta, isSigning: boolean);
	constructor(...args: any[]) {
		return new PlayerEditBookEvent.$javaClass(...args);
	}
}

