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
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class ItemSpawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ItemSpawnEvent');
	}
	constructor(arg0: Item, arg1: Location) {
		return new ItemSpawnEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Item, arg1: Location): ItemSpawnEvent {
		return new ItemSpawnEvent.$javaClass(arg0, arg1);
	}
	public static new1(arg0: Item): ItemSpawnEvent {
		return new ItemSpawnEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return ItemSpawnEvent.$javaClass.getHandlerList();
	}
}

