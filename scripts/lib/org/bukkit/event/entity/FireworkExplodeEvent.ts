declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Firework} from '../../../../org/bukkit/entity/Firework.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface FireworkExplodeEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Firework;
	getEntity(): Entity;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class FireworkExplodeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.FireworkExplodeEvent');
	}
	constructor(arg0: Firework) {
		return new FireworkExplodeEvent.$javaClass(arg0);
	}
	public static new0(arg0: Firework): FireworkExplodeEvent {
		return new FireworkExplodeEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return FireworkExplodeEvent.$javaClass.getHandlerList();
	}
}

