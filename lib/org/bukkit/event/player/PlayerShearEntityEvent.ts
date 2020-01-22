declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerShearEntityEvent extends PlayerEvent, Cancellable {
	getEntity(): Entity;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerShearEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerShearEntityEvent');
	}
	constructor(who: Player, what: Entity);
	constructor(...args: any[]) {
		return new PlayerShearEntityEvent.$javaClass(...args);
	}
}

