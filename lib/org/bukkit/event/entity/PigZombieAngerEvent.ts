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
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	setNewAnger(newAnger: number): void;
	getNewAnger(): number;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PigZombieAngerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PigZombieAngerEvent');
	}
	constructor(pigZombie: PigZombie, target: Entity, newAnger: number);
	constructor(...args: any[]) {
		return new PigZombieAngerEvent.$javaClass(...args);
	}
}

