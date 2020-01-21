declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {PortalCreateEvent$CreateReason} from '../../../../org/bukkit/event/world/PortalCreateEvent$CreateReason.js'
import {World} from '../../../../org/bukkit/World.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {WorldEvent} from '../../../../org/bukkit/event/world/WorldEvent.js'

export interface PortalCreateEvent extends WorldEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getReason(): PortalCreateEvent$CreateReason;
	getBlocks(): any;
	getWorld(): World;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PortalCreateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.PortalCreateEvent');
	}
	constructor(arg0: any, arg1: World, arg2: Entity, arg3: PortalCreateEvent$CreateReason) {
		return new PortalCreateEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: any, arg1: World, arg2: Entity, arg3: PortalCreateEvent$CreateReason): PortalCreateEvent {
		return new PortalCreateEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new1(arg0: any, arg1: World, arg2: PortalCreateEvent$CreateReason): PortalCreateEvent {
		return new PortalCreateEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PortalCreateEvent.$javaClass.getHandlerList();
	}
}

