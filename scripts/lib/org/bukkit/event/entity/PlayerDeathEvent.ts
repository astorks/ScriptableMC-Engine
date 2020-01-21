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
	setNewLevel(arg0: number): void;
	getNewLevel(): number;
	setNewExp(arg0: number): void;
	getKeepLevel(): boolean;
	getKeepInventory(): boolean;
	getDeathMessage(): string;
	setKeepInventory(arg0: boolean): void;
	setKeepLevel(arg0: boolean): void;
	setDeathMessage(arg0: string): void;
	setNewTotalExp(arg0: number): void;
	getNewExp(): number;
	getNewTotalExp(): number;
	getHandlers(): HandlerList;
	getDrops(): any;
	getDroppedExp(): number;
	setDroppedExp(arg0: number): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerDeathEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PlayerDeathEvent');
	}
	constructor(arg0: Player, arg1: any, arg2: number, arg3: number, arg4: number, arg5: number, arg6: string) {
		return new PlayerDeathEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
	}
	public static new0(arg0: Player, arg1: any, arg2: number, arg3: number, arg4: number, arg5: number, arg6: string): PlayerDeathEvent {
		return new PlayerDeathEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
	}
	public static new1(arg0: Player, arg1: any, arg2: number, arg3: number, arg4: string): PlayerDeathEvent {
		return new PlayerDeathEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new2(arg0: Player, arg1: any, arg2: number, arg3: string): PlayerDeathEvent {
		return new PlayerDeathEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static getHandlerList(): HandlerList {
		return PlayerDeathEvent.$javaClass.getHandlerList();
	}
}

