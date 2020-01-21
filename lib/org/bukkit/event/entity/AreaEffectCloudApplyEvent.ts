declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {AreaEffectCloud} from '../../../../org/bukkit/entity/AreaEffectCloud.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface AreaEffectCloudApplyEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): AreaEffectCloud;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getAffectedEntities(): any;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class AreaEffectCloudApplyEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.AreaEffectCloudApplyEvent');
	}
	constructor(entity: AreaEffectCloud, affectedEntities: any);
	constructor(...args: any[]) {
		return new AreaEffectCloudApplyEvent.$javaClass(...args);
	}
}

