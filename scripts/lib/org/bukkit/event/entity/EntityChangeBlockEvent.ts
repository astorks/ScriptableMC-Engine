declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockData} from '../../../../org/bukkit/block/data/BlockData.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityChangeBlockEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getBlock(): Block;
	getBlockData(): BlockData;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getTo(): Material;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityChangeBlockEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityChangeBlockEvent');
	}
	constructor(arg0: Entity, arg1: Block, arg2: BlockData) {
		return new EntityChangeBlockEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Entity, arg1: Block, arg2: BlockData): EntityChangeBlockEvent {
		return new EntityChangeBlockEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return EntityChangeBlockEvent.$javaClass.getHandlerList();
	}
}

