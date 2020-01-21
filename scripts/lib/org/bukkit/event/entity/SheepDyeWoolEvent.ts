declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Sheep} from '../../../../org/bukkit/entity/Sheep.js'
import {DyeColor} from '../../../../org/bukkit/DyeColor.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface SheepDyeWoolEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Sheep;
	setColor(arg0: DyeColor): void;
	getColor(): DyeColor;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class SheepDyeWoolEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.SheepDyeWoolEvent');
	}
	constructor(arg0: Sheep, arg1: DyeColor) {
		return new SheepDyeWoolEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Sheep, arg1: DyeColor): SheepDyeWoolEvent {
		return new SheepDyeWoolEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return SheepDyeWoolEvent.$javaClass.getHandlerList();
	}
}

