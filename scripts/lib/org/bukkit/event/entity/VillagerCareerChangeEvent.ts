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
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	setProfession(arg0: Villager$Profession): void;
	getProfession(): Villager$Profession;
	getReason(): VillagerCareerChangeEvent$ChangeReason;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class VillagerCareerChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.VillagerCareerChangeEvent');
	}
	constructor(arg0: Villager, arg1: Villager$Profession, arg2: VillagerCareerChangeEvent$ChangeReason) {
		return new VillagerCareerChangeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Villager, arg1: Villager$Profession, arg2: VillagerCareerChangeEvent$ChangeReason): VillagerCareerChangeEvent {
		return new VillagerCareerChangeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return VillagerCareerChangeEvent.$javaClass.getHandlerList();
	}
}

