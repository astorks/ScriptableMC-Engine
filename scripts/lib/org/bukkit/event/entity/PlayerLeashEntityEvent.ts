declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface PlayerLeashEntityEvent extends Event, Cancellable {
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getEntity(): Entity;
	getLeashHolder(): Entity;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerLeashEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PlayerLeashEntityEvent');
	}
	constructor(arg0: Entity, arg1: Entity, arg2: Player) {
		return new PlayerLeashEntityEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Entity, arg1: Entity, arg2: Player): PlayerLeashEntityEvent {
		return new PlayerLeashEntityEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PlayerLeashEntityEvent.$javaClass.getHandlerList();
	}
}

