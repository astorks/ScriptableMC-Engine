declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vector} from '../../../../org/bukkit/util/Vector.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerVelocityEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	setVelocity(arg0: Vector): void;
	getVelocity(): Vector;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerVelocityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerVelocityEvent');
	}
	constructor(arg0: Player, arg1: Vector) {
		return new PlayerVelocityEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: Vector): PlayerVelocityEvent {
		return new PlayerVelocityEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerVelocityEvent.$javaClass.getHandlerList();
	}
}

