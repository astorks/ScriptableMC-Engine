declare var Java: any;
import {CreeperPowerEvent$PowerCause} from '../../../../org/bukkit/event/entity/CreeperPowerEvent$PowerCause.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Creeper} from '../../../../org/bukkit/entity/Creeper.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {LightningStrike} from '../../../../org/bukkit/entity/LightningStrike.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface CreeperPowerEvent extends EntityEvent, Cancellable {
	getCause(): CreeperPowerEvent$PowerCause;
	getHandlers(): HandlerList;
	getEntity(): Creeper;
	getEntity(): Entity;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getLightning(): LightningStrike;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class CreeperPowerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.CreeperPowerEvent');
	}
	constructor(creeper: Creeper, cause: CreeperPowerEvent$PowerCause);
	constructor(creeper: Creeper, bolt: LightningStrike, cause: CreeperPowerEvent$PowerCause);
	constructor(...args: any[]) {
		return new CreeperPowerEvent.$javaClass(...args);
	}
}

