declare var Java: any;
import {Item} from '../../../../org/bukkit/entity/Item.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface ItemMergeEvent extends EntityEvent, Cancellable {
	getTarget(): Item;
	getEntity(): Entity;
	getEntity(): Item;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancelled: boolean): void;
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

