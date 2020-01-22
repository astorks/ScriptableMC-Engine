declare var Java: any;
import {Slime} from '../../../../org/bukkit/entity/Slime.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface SlimeSplitEvent extends EntityEvent, Cancellable {
	getCount(): number;
	getEntity(): Slime;
	getEntity(): Entity;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	setCount(count: number): void;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class SlimeSplitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.SlimeSplitEvent');
	}
	constructor(slime: Slime, count: number);
	constructor(...args: any[]) {
		return new SlimeSplitEvent.$javaClass(...args);
	}
}

