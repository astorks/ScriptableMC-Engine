declare var Java: any;
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface ItemMergeEvent extends EntityEvent, Cancellable {
	getTarget(): Item;
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Item;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class ItemMergeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ItemMergeEvent');
	}
	constructor(arg0: Item, arg1: Item) {
		return new ItemMergeEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Item, arg1: Item): ItemMergeEvent {
		return new ItemMergeEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return ItemMergeEvent.$javaClass.getHandlerList();
	}
}

