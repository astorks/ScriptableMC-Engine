declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {AbstractVillager} from '../../../../org/bukkit/entity/AbstractVillager.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {MerchantRecipe} from '../../../../org/bukkit/inventory/MerchantRecipe.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface VillagerAcquireTradeEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): AbstractVillager;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getRecipe(): MerchantRecipe;
	setRecipe(recipe: MerchantRecipe): void;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class VillagerAcquireTradeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.VillagerAcquireTradeEvent');
	}
	constructor(what: AbstractVillager, recipe: MerchantRecipe);
	constructor(...args: any[]) {
		return new VillagerAcquireTradeEvent.$javaClass(...args);
	}
}

