declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {AbstractVillager} from '../../../../org/bukkit/entity/AbstractVillager.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {MerchantRecipe} from '../../../../org/bukkit/inventory/MerchantRecipe.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface VillagerAcquireTradeEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): AbstractVillager;
	getEntity(): Entity;
	setRecipe(arg0: MerchantRecipe): void;
	getRecipe(): MerchantRecipe;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class VillagerAcquireTradeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.VillagerAcquireTradeEvent');
	}
	constructor(arg0: AbstractVillager, arg1: MerchantRecipe) {
		return new VillagerAcquireTradeEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: AbstractVillager, arg1: MerchantRecipe): VillagerAcquireTradeEvent {
		return new VillagerAcquireTradeEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return VillagerAcquireTradeEvent.$javaClass.getHandlerList();
	}
}

