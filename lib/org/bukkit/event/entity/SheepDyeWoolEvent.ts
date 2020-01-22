declare var Java: any;
import {Sheep} from '../../../../org/bukkit/entity/Sheep.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {DyeColor} from '../../../../org/bukkit/DyeColor.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface SheepDyeWoolEvent extends EntityEvent, Cancellable {
	getEntity(): Sheep;
	getEntity(): Entity;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	setColor(color: DyeColor): void;
	getColor(): DyeColor;
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

