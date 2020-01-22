declare var Java: any;
import {AbstractVillager} from '../../../../org/bukkit/entity/AbstractVillager.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {MerchantRecipe} from '../../../../org/bukkit/inventory/MerchantRecipe.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface VillagerReplenishTradeEvent extends EntityEvent, Cancellable {
	getEntity(): AbstractVillager;
	getEntity(): Entity;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getRecipe(): MerchantRecipe;
	setRecipe(recipe: MerchantRecipe): void;
	setBonus(bonus: number): void;
	getBonus(): number;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class VillagerReplenishTradeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.VillagerReplenishTradeEvent');
	}
	constructor(what: AbstractVillager, recipe: MerchantRecipe, bonus: number);
	constructor(...args: any[]) {
		return new VillagerReplenishTradeEvent.$javaClass(...args);
	}
}

