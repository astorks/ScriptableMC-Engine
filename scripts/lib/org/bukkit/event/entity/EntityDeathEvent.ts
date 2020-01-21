declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityDeathEvent extends EntityEvent {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): LivingEntity;
	getDrops(): any;
	getDroppedExp(): number;
	setDroppedExp(arg0: number): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityDeathEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDeathEvent');
	}
	constructor(arg0: LivingEntity, arg1: any, arg2: number) {
		return new EntityDeathEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: LivingEntity, arg1: any, arg2: number): EntityDeathEvent {
		return new EntityDeathEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: LivingEntity, arg1: any): EntityDeathEvent {
		return new EntityDeathEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return EntityDeathEvent.$javaClass.getHandlerList();
	}
}

