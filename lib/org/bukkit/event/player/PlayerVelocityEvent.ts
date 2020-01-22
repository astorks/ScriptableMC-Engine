declare var Java: any;
import {Vector} from '../../../../org/bukkit/util/Vector.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerVelocityEvent extends PlayerEvent, Cancellable {
	setVelocity(velocity: Vector): void;
	getVelocity(): Vector;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerVelocityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerVelocityEvent');
	}
	constructor(player: Player, velocity: Vector);
	constructor(...args: any[]) {
		return new PlayerVelocityEvent.$javaClass(...args);
	}
}

