declare var Java: any;
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockData} from '../../../../org/bukkit/block/data/BlockData.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityChangeBlockEvent} from '../../../../org/bukkit/event/entity/EntityChangeBlockEvent.js'

export interface EntityBreakDoorEvent extends EntityChangeBlockEvent {
	getEntity(): LivingEntity;
	getEntity(): Entity;
	getBlock(): Block;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getBlockData(): BlockData;
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

