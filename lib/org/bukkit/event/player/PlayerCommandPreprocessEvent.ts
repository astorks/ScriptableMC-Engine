declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerCommandPreprocessEvent extends PlayerEvent, Cancellable {
	getMessage(): string;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	setMessage(command: string): void;
	getRecipients(): any;
	setPlayer(player: Player): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerCommandPreprocessEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerCommandPreprocessEvent');
	}
	constructor(player: Player, message: string, recipients: any);
	constructor(player: Player, message: string);
	constructor(...args: any[]) {
		return new PlayerCommandPreprocessEvent.$javaClass(...args);
	}
}

