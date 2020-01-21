declare var Java: any;
import {CreeperPowerEvent$PowerCause} from '../../../../org/bukkit/event/entity/CreeperPowerEvent$PowerCause.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Creeper} from '../../../../org/bukkit/entity/Creeper.js'
import {LightningStrike} from '../../../../org/bukkit/entity/LightningStrike.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface CreeperPowerEvent extends EntityEvent, Cancellable {
	getCause(): CreeperPowerEvent$PowerCause;
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Creeper;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getLightning(): LightningStrike;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class CreeperPowerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.CreeperPowerEvent');
	}
	constructor(arg0: Creeper, arg1: CreeperPowerEvent$PowerCause) {
		return new CreeperPowerEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Creeper, arg1: CreeperPowerEvent$PowerCause): CreeperPowerEvent {
		return new CreeperPowerEvent.$javaClass(arg0, arg1);
	}
	public static new1(arg0: Creeper, arg1: LightningStrike, arg2: CreeperPowerEvent$PowerCause): CreeperPowerEvent {
		return new CreeperPowerEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return CreeperPowerEvent.$javaClass.getHandlerList();
	}
}

