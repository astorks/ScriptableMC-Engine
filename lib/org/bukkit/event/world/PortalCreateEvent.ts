declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {PortalCreateEvent$CreateReason} from '../../../../org/bukkit/event/world/PortalCreateEvent$CreateReason.js'
import {World} from '../../../../org/bukkit/World.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {WorldEvent} from '../../../../org/bukkit/event/world/WorldEvent.js'

export interface PortalCreateEvent extends WorldEvent, Cancellable {
	getEntity(): Entity;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getBlocks(): any;
	getReason(): PortalCreateEvent$CreateReason;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PortalCreateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.PortalCreateEvent');
	}
	constructor(blocks: any, world: World, entity: Entity, reason: PortalCreateEvent$CreateReason);
	constructor(blocks: any, world: World, reason: PortalCreateEvent$CreateReason);
	constructor(...args: any[]) {
		return new PortalCreateEvent.$javaClass(...args);
	}
}

