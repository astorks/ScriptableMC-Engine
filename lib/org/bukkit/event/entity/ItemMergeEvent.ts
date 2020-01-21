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
	setCancelled(cancelled: boolean): void;
	isCancelled(): boolean;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ItemMergeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ItemMergeEvent');
	}
	constructor(item: Item, target: Item);
	constructor(...args: any[]) {
		return new ItemMergeEvent.$javaClass(...args);
	}
}

