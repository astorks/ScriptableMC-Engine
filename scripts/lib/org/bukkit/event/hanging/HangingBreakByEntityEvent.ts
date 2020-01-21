declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HangingBreakEvent$RemoveCause} from '../../../../org/bukkit/event/hanging/HangingBreakEvent$RemoveCause.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Hanging} from '../../../../org/bukkit/entity/Hanging.js'
import {HangingBreakEvent} from '../../../../org/bukkit/event/hanging/HangingBreakEvent.js'

export interface HangingBreakByEntityEvent extends HangingBreakEvent {
	getRemover(): Entity;
	getCause(): HangingBreakEvent$RemoveCause;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntity(): Hanging;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class HangingBreakByEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingBreakByEntityEvent');
	}
	constructor(arg0: Hanging, arg1: Entity) {
		return new HangingBreakByEntityEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Hanging, arg1: Entity): HangingBreakByEntityEvent {
		return new HangingBreakByEntityEvent.$javaClass(arg0, arg1);
	}
	public static new1(arg0: Hanging, arg1: Entity, arg2: HangingBreakEvent$RemoveCause): HangingBreakByEntityEvent {
		return new HangingBreakByEntityEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return HangingBreakByEntityEvent.$javaClass.getHandlerList();
	}
}

