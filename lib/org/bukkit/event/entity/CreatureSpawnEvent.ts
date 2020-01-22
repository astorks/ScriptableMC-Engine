declare var Java: any;
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {CreatureSpawnEvent$SpawnReason} from '../../../../org/bukkit/event/entity/CreatureSpawnEvent$SpawnReason.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntitySpawnEvent} from '../../../../org/bukkit/event/entity/EntitySpawnEvent.js'

export interface CreatureSpawnEvent extends EntitySpawnEvent {
	getEntity(): LivingEntity;
	getEntity(): Entity;
	getSpawnReason(): CreatureSpawnEvent$SpawnReason;
	getLocation(): Location;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class CreatureSpawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.CreatureSpawnEvent');
	}
	constructor(spawnee: LivingEntity, spawnReason: CreatureSpawnEvent$SpawnReason);
	constructor(...args: any[]) {
		return new CreatureSpawnEvent.$javaClass(...args);
	}
}

