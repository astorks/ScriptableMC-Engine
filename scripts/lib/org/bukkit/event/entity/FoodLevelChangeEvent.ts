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
	getFoodLevel(): number;
	setFoodLevel(arg0: number): void;
	getItem(): ItemStack;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class FoodLevelChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.FoodLevelChangeEvent');
	}
	constructor(arg0: HumanEntity, arg1: number, arg2: ItemStack) {
		return new FoodLevelChangeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: HumanEntity, arg1: number, arg2: ItemStack): FoodLevelChangeEvent {
		return new FoodLevelChangeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: HumanEntity, arg1: number): FoodLevelChangeEvent {
		return new FoodLevelChangeEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return FoodLevelChangeEvent.$javaClass.getHandlerList();
	}
}

