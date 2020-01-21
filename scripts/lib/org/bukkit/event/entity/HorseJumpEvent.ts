declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {AbstractHorse} from '../../../../org/bukkit/entity/AbstractHorse.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface HorseJumpEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): AbstractHorse;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	setPower(arg0: number): void;
	getPower(): number;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class HorseJumpEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.HorseJumpEvent');
	}
	constructor(arg0: AbstractHorse, arg1: number) {
		return new HorseJumpEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: AbstractHorse, arg1: number): HorseJumpEvent {
		return new HorseJumpEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return HorseJumpEvent.$javaClass.getHandlerList();
	}
}

