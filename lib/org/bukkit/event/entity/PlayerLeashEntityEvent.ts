declare var Java: any;
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface PlayerLeashEntityEvent extends Event, Cancellable {
	getPlayer(): Player;
	getEntity(): Entity;
	getLeashHolder(): Entity;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerLeashEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PlayerLeashEntityEvent');
	}
	constructor(what: Entity, leashHolder: Entity, leasher: Player);
	constructor(...args: any[]) {
		return new PlayerLeashEntityEvent.$javaClass(...args);
	}
}

