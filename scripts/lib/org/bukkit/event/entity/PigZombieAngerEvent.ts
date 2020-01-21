declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {PigZombie} from '../../../../org/bukkit/entity/PigZombie.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface PigZombieAngerEvent extends EntityEvent, Cancellable {
	getTarget(): Entity;
	getHandlers(): HandlerList;
	getEntity(): PigZombie;
	getEntity(): Entity;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getNewAnger(): number;
	setNewAnger(arg0: number): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PigZombieAngerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PigZombieAngerEvent');
	}
	constructor(arg0: PigZombie, arg1: Entity, arg2: number) {
		return new PigZombieAngerEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: PigZombie, arg1: Entity, arg2: number): PigZombieAngerEvent {
		return new PigZombieAngerEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PigZombieAngerEvent.$javaClass.getHandlerList();
	}
}

