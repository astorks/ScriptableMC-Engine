declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockData} from '../../../../org/bukkit/block/data/BlockData.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityChangeBlockEvent} from '../../../../org/bukkit/event/entity/EntityChangeBlockEvent.js'

export interface EntityBreakDoorEvent extends EntityChangeBlockEvent {
	getEntity(): Entity;
	getEntity(): LivingEntity;
	getHandlers(): HandlerList;
	getBlock(): Block;
	getBlockData(): BlockData;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getTo(): Material;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityBreakDoorEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityBreakDoorEvent');
	}
	constructor(entity: LivingEntity, targetBlock: Block);
	constructor(...args: any[]) {
		return new EntityBreakDoorEvent.$javaClass(...args);
	}
}

