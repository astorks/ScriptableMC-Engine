declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {CreatureSpawnEvent$SpawnReason} from '../../../../org/bukkit/event/entity/CreatureSpawnEvent$SpawnReason.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntitySpawnEvent} from '../../../../org/bukkit/event/entity/EntitySpawnEvent.js'

export interface CreatureSpawnEvent extends EntitySpawnEvent {
	getEntity(): Entity;
	getEntity(): LivingEntity;
	getSpawnReason(): CreatureSpawnEvent$SpawnReason;
	getLocation(): Location;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class CreatureSpawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.CreatureSpawnEvent');
	}
	constructor(arg0: LivingEntity, arg1: CreatureSpawnEvent$SpawnReason) {
		return new CreatureSpawnEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: LivingEntity, arg1: CreatureSpawnEvent$SpawnReason): CreatureSpawnEvent {
		return new CreatureSpawnEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return CreatureSpawnEvent.$javaClass.getHandlerList();
	}
}

