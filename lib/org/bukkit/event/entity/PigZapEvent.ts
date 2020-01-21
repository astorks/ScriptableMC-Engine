declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Pig} from '../../../../org/bukkit/entity/Pig.js'
import {PigZombie} from '../../../../org/bukkit/entity/PigZombie.js'
import {LightningStrike} from '../../../../org/bukkit/entity/LightningStrike.js'
import {EntityTransformEvent$TransformReason} from '../../../../org/bukkit/event/entity/EntityTransformEvent$TransformReason.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityTransformEvent} from '../../../../org/bukkit/event/entity/EntityTransformEvent.js'

export interface PigZapEvent extends EntityTransformEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Pig;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getPigZombie(): PigZombie;
	getLightning(): LightningStrike;
	getTransformReason(): EntityTransformEvent$TransformReason;
	getTransformedEntities(): any;
	getTransformedEntity(): Entity;
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

