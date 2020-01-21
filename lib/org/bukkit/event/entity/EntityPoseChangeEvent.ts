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
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityPoseChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPoseChangeEvent');
	}
	constructor(who: Entity, pose: Pose);
	constructor(...args: any[]) {
		return new EntityPoseChangeEvent.$javaClass(...args);
	}
}

