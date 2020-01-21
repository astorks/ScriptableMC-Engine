declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {AbstractVillager} from '../../../../org/bukkit/entity/AbstractVillager.js'
import {MerchantRecipe} from '../../../../org/bukkit/inventory/MerchantRecipe.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface VillagerAcquireTradeEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): AbstractVillager;
	setRecipe(recipe: MerchantRecipe): void;
	getRecipe(): MerchantRecipe;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
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

