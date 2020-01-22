declare var Java: any;
import {Pig} from '../../../../org/bukkit/entity/Pig.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {PigZombie} from '../../../../org/bukkit/entity/PigZombie.js'
import {LightningStrike} from '../../../../org/bukkit/entity/LightningStrike.js'
import {EntityTransformEvent$TransformReason} from '../../../../org/bukkit/event/entity/EntityTransformEvent$TransformReason.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityTransformEvent} from '../../../../org/bukkit/event/entity/EntityTransformEvent.js'

export interface PigZapEvent extends EntityTransformEvent, Cancellable {
	getEntity(): Pig;
	getEntity(): Entity;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getPigZombie(): PigZombie;
	getLightning(): LightningStrike;
	getTransformedEntity(): Entity;
	getTransformedEntities(): any;
	getTransformReason(): EntityTransformEvent$TransformReason;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PigZapEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PigZapEvent');
	}
	constructor(pig: Pig, bolt: LightningStrike, pigzombie: PigZombie);
	constructor(...args: any[]) {
		return new PigZapEvent.$javaClass(...args);
	}
}

