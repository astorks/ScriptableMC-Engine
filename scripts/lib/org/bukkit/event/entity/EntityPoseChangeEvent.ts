declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Pose} from '../../../../org/bukkit/entity/Pose.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityPoseChangeEvent extends EntityEvent {
	getHandlers(): HandlerList;
	getPose(): Pose;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityPoseChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPoseChangeEvent');
	}
	constructor(arg0: Entity, arg1: Pose) {
		return new EntityPoseChangeEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Entity, arg1: Pose): EntityPoseChangeEvent {
		return new EntityPoseChangeEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return EntityPoseChangeEvent.$javaClass.getHandlerList();
	}
}

