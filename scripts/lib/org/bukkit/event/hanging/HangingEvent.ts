declare var Java: any;
import {Hanging} from '../../../../org/bukkit/entity/Hanging.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface HangingEvent extends Event {
	getEntity(): Hanging;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class HangingEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingEvent');
	}
}

