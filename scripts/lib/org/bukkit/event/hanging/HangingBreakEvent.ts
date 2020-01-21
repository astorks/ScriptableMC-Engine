declare var Java: any;
import {HangingBreakEvent$RemoveCause} from '../../../../org/bukkit/event/hanging/HangingBreakEvent$RemoveCause.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Hanging} from '../../../../org/bukkit/entity/Hanging.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {HangingEvent} from '../../../../org/bukkit/event/hanging/HangingEvent.js'

export interface HangingBreakEvent extends HangingEvent, Cancellable {
	getCause(): HangingBreakEvent$RemoveCause;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntity(): Hanging;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class HangingBreakEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingBreakEvent');
	}
	constructor(arg0: Hanging, arg1: HangingBreakEvent$RemoveCause) {
		return new HangingBreakEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Hanging, arg1: HangingBreakEvent$RemoveCause): HangingBreakEvent {
		return new HangingBreakEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return HangingBreakEvent.$javaClass.getHandlerList();
	}
}

