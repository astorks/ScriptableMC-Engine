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
	setColor(color: DyeColor): void;
	getColor(): DyeColor;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class SheepDyeWoolEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.SheepDyeWoolEvent');
	}
	constructor(sheep: Sheep, color: DyeColor);
	constructor(...args: any[]) {
		return new SheepDyeWoolEvent.$javaClass(...args);
	}
}

