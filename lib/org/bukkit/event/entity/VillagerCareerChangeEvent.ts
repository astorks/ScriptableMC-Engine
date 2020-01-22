declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Villager} from '../../../../org/bukkit/entity/Villager.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Villager$Profession} from '../../../../org/bukkit/entity/Villager$Profession.js'
import {VillagerCareerChangeEvent$ChangeReason} from '../../../../org/bukkit/event/entity/VillagerCareerChangeEvent$ChangeReason.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface VillagerCareerChangeEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): Villager;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	setProfession(profession: Villager$Profession): void;
	getProfession(): Villager$Profession;
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

