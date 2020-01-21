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
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getPower(): number;
	setPower(power: number): void;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class HorseJumpEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.HorseJumpEvent');
	}
	constructor(horse: AbstractHorse, power: number);
	constructor(...args: any[]) {
		return new HorseJumpEvent.$javaClass(...args);
	}
}

