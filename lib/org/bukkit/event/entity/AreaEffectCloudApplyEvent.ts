declare var Java: any;
import {AreaEffectCloud} from '../../../../org/bukkit/entity/AreaEffectCloud.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface AreaEffectCloudApplyEvent extends EntityEvent, Cancellable {
	getEntity(): AreaEffectCloud;
	getEntity(): Entity;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
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

