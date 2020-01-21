declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerShearEntityEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerShearEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerShearEntityEvent');
	}
	constructor(arg0: Player, arg1: Entity) {
		return new PlayerShearEntityEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: Entity): PlayerShearEntityEvent {
		return new PlayerShearEntityEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerShearEntityEvent.$javaClass.getHandlerList();
	}
}

