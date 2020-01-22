declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface AsyncPlayerChatEvent extends PlayerEvent, Cancellable {
	getMessage(): string;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getRecipients(): any;
	setMessage(message: string): void;
	setFormat(format: string): void;
	getFormat(): string;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class AsyncPlayerChatEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.AsyncPlayerChatEvent');
	}
	constructor(async: boolean, who: Player, message: string, players: any);
	constructor(...args: any[]) {
		return new AsyncPlayerChatEvent.$javaClass(...args);
	}
}

