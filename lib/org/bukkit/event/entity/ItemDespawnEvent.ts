declare var Java: any;
import {Location} from '../../../../org/bukkit/Location.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface ItemDespawnEvent extends EntityEvent, Cancellable {
	getLocation(): Location;
	getEntity(): Entity;
	getEntity(): Item;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ItemDespawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ItemDespawnEvent');
	}
	constructor(despawnee: Item, loc: Location);
	constructor(...args: any[]) {
		return new ItemDespawnEvent.$javaClass(...args);
	}
}

