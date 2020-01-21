declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerShearEntityEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
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

