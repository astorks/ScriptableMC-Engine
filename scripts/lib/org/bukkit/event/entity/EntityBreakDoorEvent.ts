declare var Java: any;
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockData} from '../../../../org/bukkit/block/data/BlockData.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityChangeBlockEvent} from '../../../../org/bukkit/event/entity/EntityChangeBlockEvent.js'

export interface EntityBreakDoorEvent extends EntityChangeBlockEvent {
	getEntity(): LivingEntity;
	getEntity(): Entity;
	getHandlers(): HandlerList;
	getBlock(): Block;
	getBlockData(): BlockData;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getTo(): Material;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityBreakDoorEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityBreakDoorEvent');
	}
	constructor(arg0: LivingEntity, arg1: Block) {
		return new EntityBreakDoorEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: LivingEntity, arg1: Block): EntityBreakDoorEvent {
		return new EntityBreakDoorEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return EntityBreakDoorEvent.$javaClass.getHandlerList();
	}
}

