declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntitySpawnEvent} from '../../../../org/bukkit/event/entity/EntitySpawnEvent.js'

export interface ItemSpawnEvent extends EntitySpawnEvent {
	getEntity(): Entity;
	getEntity(): Item;
	getLocation(): Location;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ItemSpawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ItemSpawnEvent');
	}
	constructor(spawnee: Item, loc: Location);
	constructor(spawnee: Item);
	constructor(...args: any[]) {
		return new ItemSpawnEvent.$javaClass(...args);
	}
}

