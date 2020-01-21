declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Pig} from '../../../../org/bukkit/entity/Pig.js'
import {LightningStrike} from '../../../../org/bukkit/entity/LightningStrike.js'
import {PigZombie} from '../../../../org/bukkit/entity/PigZombie.js'
import {EntityTransformEvent$TransformReason} from '../../../../org/bukkit/event/entity/EntityTransformEvent$TransformReason.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityTransformEvent} from '../../../../org/bukkit/event/entity/EntityTransformEvent.js'

export interface PigZapEvent extends EntityTransformEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Pig;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getLightning(): LightningStrike;
	getPigZombie(): PigZombie;
	getTransformedEntity(): Entity;
	getTransformedEntities(): any;
	getTransformReason(): EntityTransformEvent$TransformReason;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PigZapEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PigZapEvent');
	}
	constructor(arg0: Pig, arg1: LightningStrike, arg2: PigZombie) {
		return new PigZapEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Pig, arg1: LightningStrike, arg2: PigZombie): PigZapEvent {
		return new PigZapEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PigZapEvent.$javaClass.getHandlerList();
	}
}

