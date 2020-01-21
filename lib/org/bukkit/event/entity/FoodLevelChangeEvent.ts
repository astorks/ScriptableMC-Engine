declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface FoodLevelChangeEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): HumanEntity;
	getItem(): ItemStack;
	setFoodLevel(level: number): void;
	getFoodLevel(): number;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class FoodLevelChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.FoodLevelChangeEvent');
	}
	constructor(what: HumanEntity, level: number, item: ItemStack);
	constructor(what: HumanEntity, level: number);
	constructor(...args: any[]) {
		return new FoodLevelChangeEvent.$javaClass(...args);
	}
}

