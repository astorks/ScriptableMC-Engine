declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Villager} from '../../../../org/bukkit/entity/Villager.js'
import {Villager$Profession} from '../../../../org/bukkit/entity/Villager$Profession.js'
import {VillagerCareerChangeEvent$ChangeReason} from '../../../../org/bukkit/event/entity/VillagerCareerChangeEvent$ChangeReason.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface VillagerCareerChangeEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Villager;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getProfession(): Villager$Profession;
	setProfession(profession: Villager$Profession): void;
	getReason(): VillagerCareerChangeEvent$ChangeReason;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class VillagerCareerChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.VillagerCareerChangeEvent');
	}
	constructor(what: Villager, profession: Villager$Profession, reason: VillagerCareerChangeEvent$ChangeReason);
	constructor(...args: any[]) {
		return new VillagerCareerChangeEvent.$javaClass(...args);
	}
}

