declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Slime} from '../../../../org/bukkit/entity/Slime.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface SlimeSplitEvent extends EntityEvent, Cancellable {
	getCount(): number;
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Slime;
	setCount(arg0: number): void;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class SlimeSplitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.SlimeSplitEvent');
	}
	constructor(arg0: Slime, arg1: number) {
		return new SlimeSplitEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Slime, arg1: number): SlimeSplitEvent {
		return new SlimeSplitEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return SlimeSplitEvent.$javaClass.getHandlerList();
	}
}

