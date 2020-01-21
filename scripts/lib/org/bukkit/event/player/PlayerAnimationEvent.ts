declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {PlayerAnimationType} from '../../../../org/bukkit/event/player/PlayerAnimationType.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerAnimationEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getAnimationType(): PlayerAnimationType;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerAnimationEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerAnimationEvent');
	}
	constructor(arg0: Player) {
		return new PlayerAnimationEvent.$javaClass(arg0);
	}
	public static new0(arg0: Player): PlayerAnimationEvent {
		return new PlayerAnimationEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return PlayerAnimationEvent.$javaClass.getHandlerList();
	}
}

