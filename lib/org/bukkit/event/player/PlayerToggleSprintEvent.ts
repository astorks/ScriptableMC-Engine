declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerToggleSprintEvent extends PlayerEvent, Cancellable {
	isSprinting(): boolean;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerToggleSprintEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerToggleSprintEvent');
	}
	constructor(player: Player, isSprinting: boolean);
	constructor(...args: any[]) {
		return new PlayerToggleSprintEvent.$javaClass(...args);
	}
}

