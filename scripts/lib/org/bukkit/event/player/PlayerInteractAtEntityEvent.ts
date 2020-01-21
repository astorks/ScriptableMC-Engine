declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vector} from '../../../../org/bukkit/util/Vector.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerInteractEntityEvent} from '../../../../org/bukkit/event/player/PlayerInteractEntityEvent.js'

export interface PlayerInteractAtEntityEvent extends PlayerInteractEntityEvent {
	getHandlers(): HandlerList;
	getClickedPosition(): Vector;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getRightClicked(): Entity;
	getHand(): EquipmentSlot;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerInteractAtEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerInteractAtEntityEvent');
	}
	constructor(arg0: Player, arg1: Entity, arg2: Vector, arg3: EquipmentSlot) {
		return new PlayerInteractAtEntityEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: Player, arg1: Entity, arg2: Vector, arg3: EquipmentSlot): PlayerInteractAtEntityEvent {
		return new PlayerInteractAtEntityEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new1(arg0: Player, arg1: Entity, arg2: Vector): PlayerInteractAtEntityEvent {
		return new PlayerInteractAtEntityEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PlayerInteractAtEntityEvent.$javaClass.getHandlerList();
	}
}

