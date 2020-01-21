declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {AbstractVillager} from '../../../../org/bukkit/entity/AbstractVillager.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {MerchantRecipe} from '../../../../org/bukkit/inventory/MerchantRecipe.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface VillagerReplenishTradeEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): AbstractVillager;
	getEntity(): Entity;
	setRecipe(arg0: MerchantRecipe): void;
	getRecipe(): MerchantRecipe;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getBonus(): number;
	setBonus(arg0: number): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class VillagerReplenishTradeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.VillagerReplenishTradeEvent');
	}
	constructor(arg0: AbstractVillager, arg1: MerchantRecipe, arg2: number) {
		return new VillagerReplenishTradeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: AbstractVillager, arg1: MerchantRecipe, arg2: number): VillagerReplenishTradeEvent {
		return new VillagerReplenishTradeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return VillagerReplenishTradeEvent.$javaClass.getHandlerList();
	}
}

