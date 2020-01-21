declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerCommandPreprocessEvent extends PlayerEvent, Cancellable {
	getMessage(): string;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	setMessage(arg0: string): void;
	getRecipients(): any;
	setPlayer(arg0: Player): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerCommandPreprocessEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerCommandPreprocessEvent');
	}
	constructor(arg0: Player, arg1: string, arg2: any) {
		return new PlayerCommandPreprocessEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Player, arg1: string, arg2: any): PlayerCommandPreprocessEvent {
		return new PlayerCommandPreprocessEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: Player, arg1: string): PlayerCommandPreprocessEvent {
		return new PlayerCommandPreprocessEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerCommandPreprocessEvent.$javaClass.getHandlerList();
	}
}

