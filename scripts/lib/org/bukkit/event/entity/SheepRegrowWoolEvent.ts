declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Sheep} from '../../../../org/bukkit/entity/Sheep.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface SheepRegrowWoolEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Sheep;
	getEntity(): Entity;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class SheepRegrowWoolEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.SheepRegrowWoolEvent');
	}
	constructor(arg0: Sheep) {
		return new SheepRegrowWoolEvent.$javaClass(arg0);
	}
	public static new0(arg0: Sheep): SheepRegrowWoolEvent {
		return new SheepRegrowWoolEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return SheepRegrowWoolEvent.$javaClass.getHandlerList();
	}
}

