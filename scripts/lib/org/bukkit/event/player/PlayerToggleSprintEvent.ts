declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerToggleSprintEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isSprinting(): boolean;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerToggleSprintEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerToggleSprintEvent');
	}
	constructor(arg0: Player, arg1: boolean) {
		return new PlayerToggleSprintEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: boolean): PlayerToggleSprintEvent {
		return new PlayerToggleSprintEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerToggleSprintEvent.$javaClass.getHandlerList();
	}
}

