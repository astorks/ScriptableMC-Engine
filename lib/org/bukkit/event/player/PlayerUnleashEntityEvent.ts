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
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	getReason(): EntityUnleashEvent$UnleashReason;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerUnleashEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerUnleashEntityEvent');
	}
	constructor(entity: Entity, player: Player);
	constructor(...args: any[]) {
		return new PlayerUnleashEntityEvent.$javaClass(...args);
	}
}

