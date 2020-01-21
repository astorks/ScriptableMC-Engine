declare var Java: any;
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityUnleashEvent$UnleashReason} from '../../../../org/bukkit/event/entity/EntityUnleashEvent$UnleashReason.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityUnleashEvent} from '../../../../org/bukkit/event/entity/EntityUnleashEvent.js'

export interface PlayerUnleashEntityEvent extends EntityUnleashEvent, Cancellable {
	getPlayer(): Player;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getHandlers(): HandlerList;
	getReason(): EntityUnleashEvent$UnleashReason;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerUnleashEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerUnleashEntityEvent');
	}
	constructor(arg0: Entity, arg1: Player) {
		return new PlayerUnleashEntityEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Entity, arg1: Player): PlayerUnleashEntityEvent {
		return new PlayerUnleashEntityEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerUnleashEntityEvent.$javaClass.getHandlerList();
	}
}

