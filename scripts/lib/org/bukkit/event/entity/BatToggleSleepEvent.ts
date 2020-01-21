declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Bat} from '../../../../org/bukkit/entity/Bat.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface BatToggleSleepEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	isAwake(): boolean;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BatToggleSleepEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.BatToggleSleepEvent');
	}
	constructor(arg0: Bat, arg1: boolean) {
		return new BatToggleSleepEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Bat, arg1: boolean): BatToggleSleepEvent {
		return new BatToggleSleepEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return BatToggleSleepEvent.$javaClass.getHandlerList();
	}
}

