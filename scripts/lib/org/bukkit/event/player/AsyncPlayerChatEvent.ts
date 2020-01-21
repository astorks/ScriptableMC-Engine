declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface AsyncPlayerChatEvent extends PlayerEvent, Cancellable {
	getMessage(): string;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	setMessage(arg0: string): void;
	getRecipients(): any;
	getFormat(): string;
	setFormat(arg0: string): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class AsyncPlayerChatEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.AsyncPlayerChatEvent');
	}
	constructor(arg0: boolean, arg1: Player, arg2: string, arg3: any) {
		return new AsyncPlayerChatEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: boolean, arg1: Player, arg2: string, arg3: any): AsyncPlayerChatEvent {
		return new AsyncPlayerChatEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static getHandlerList(): HandlerList {
		return AsyncPlayerChatEvent.$javaClass.getHandlerList();
	}
}

