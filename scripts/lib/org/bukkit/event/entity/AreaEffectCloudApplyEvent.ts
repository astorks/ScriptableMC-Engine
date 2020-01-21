declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {AreaEffectCloud} from '../../../../org/bukkit/entity/AreaEffectCloud.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface AreaEffectCloudApplyEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): AreaEffectCloud;
	getEntity(): Entity;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getAffectedEntities(): any;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class AreaEffectCloudApplyEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.AreaEffectCloudApplyEvent');
	}
	constructor(arg0: AreaEffectCloud, arg1: any) {
		return new AreaEffectCloudApplyEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: AreaEffectCloud, arg1: any): AreaEffectCloudApplyEvent {
		return new AreaEffectCloudApplyEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return AreaEffectCloudApplyEvent.$javaClass.getHandlerList();
	}
}

