declare var Java: any;
import {HangingBreakEvent$RemoveCause} from '../../../../org/bukkit/event/hanging/HangingBreakEvent$RemoveCause.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Hanging} from '../../../../org/bukkit/entity/Hanging.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {HangingEvent} from '../../../../org/bukkit/event/hanging/HangingEvent.js'

export interface HangingBreakEvent extends HangingEvent, Cancellable {
	getCause(): HangingBreakEvent$RemoveCause;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getEntity(): Hanging;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class HangingBreakEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingBreakEvent');
	}
	constructor(hanging: Hanging, cause: HangingBreakEvent$RemoveCause);
	constructor(...args: any[]) {
		return new HangingBreakEvent.$javaClass(...args);
	}
}

