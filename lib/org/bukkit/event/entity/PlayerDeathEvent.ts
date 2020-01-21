declare var Java: any;
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityDeathEvent} from '../../../../org/bukkit/event/entity/EntityDeathEvent.js'

export interface PlayerDeathEvent extends EntityDeathEvent {
	getEntity(): LivingEntity;
	getEntity(): Entity;
	getEntity(): Player;
	getDeathMessage(): string;
	getNewExp(): number;
	setNewExp(exp: number): void;
	getKeepInventory(): boolean;
	setKeepInventory(keepInventory: boolean): void;
	getNewTotalExp(): number;
	setKeepLevel(keepLevel: boolean): void;
	setNewTotalExp(totalExp: number): void;
	setDeathMessage(deathMessage: string): void;
	getKeepLevel(): boolean;
	getNewLevel(): number;
	setNewLevel(level: number): void;
	getHandlers(): HandlerList;
	getDrops(): any;
	getDroppedExp(): number;
	setDroppedExp(exp: number): void;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerDeathEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PlayerDeathEvent');
	}
	constructor(player: Player, drops: any, droppedExp: number, newExp: number, newTotalExp: number, newLevel: number, deathMessage: string);
	constructor(player: Player, drops: any, droppedExp: number, newExp: number, deathMessage: string);
	constructor(player: Player, drops: any, droppedExp: number, deathMessage: string);
	constructor(...args: any[]) {
		return new PlayerDeathEvent.$javaClass(...args);
	}
}

