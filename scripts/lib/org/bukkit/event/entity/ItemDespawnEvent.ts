declare var Java: any;
import {Location} from '../../../../org/bukkit/Location.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface ItemDespawnEvent extends EntityEvent, Cancellable {
	getLocation(): Location;
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Item;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class ItemDespawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ItemDespawnEvent');
	}
	constructor(arg0: Item, arg1: Location) {
		return new ItemDespawnEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Item, arg1: Location): ItemDespawnEvent {
		return new ItemDespawnEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return ItemDespawnEvent.$javaClass.getHandlerList();
	}
}

