declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HangingBreakEvent$RemoveCause} from '../../../../org/bukkit/event/hanging/HangingBreakEvent$RemoveCause.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Hanging} from '../../../../org/bukkit/entity/Hanging.js'
import {HangingBreakEvent} from '../../../../org/bukkit/event/hanging/HangingBreakEvent.js'

export interface HangingBreakByEntityEvent extends HangingBreakEvent {
	getRemover(): Entity;
	getCause(): HangingBreakEvent$RemoveCause;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getEntity(): Hanging;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class HangingBreakByEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingBreakByEntityEvent');
	}
	constructor(hanging: Hanging, remover: Entity);
	constructor(hanging: Hanging, remover: Entity, cause: HangingBreakEvent$RemoveCause);
	constructor(...args: any[]) {
		return new HangingBreakByEntityEvent.$javaClass(...args);
	}
}

