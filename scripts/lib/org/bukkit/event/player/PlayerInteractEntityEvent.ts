declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerInteractEntityEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getRightClicked(): Entity;
	getHand(): EquipmentSlot;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerInteractEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerInteractEntityEvent');
	}
	constructor(arg0: Player, arg1: Entity, arg2: EquipmentSlot) {
		return new PlayerInteractEntityEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Player, arg1: Entity, arg2: EquipmentSlot): PlayerInteractEntityEvent {
		return new PlayerInteractEntityEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: Player, arg1: Entity): PlayerInteractEntityEvent {
		return new PlayerInteractEntityEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerInteractEntityEvent.$javaClass.getHandlerList();
	}
}

