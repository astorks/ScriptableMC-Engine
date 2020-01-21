declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vector} from '../../../../org/bukkit/util/Vector.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerInteractEntityEvent} from '../../../../org/bukkit/event/player/PlayerInteractEntityEvent.js'

export interface PlayerInteractAtEntityEvent extends PlayerInteractEntityEvent {
	getHandlers(): HandlerList;
	getClickedPosition(): Vector;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getHand(): EquipmentSlot;
	getRightClicked(): Entity;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerInteractAtEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerInteractAtEntityEvent');
	}
	constructor(who: Player, clickedEntity: Entity, position: Vector, hand: EquipmentSlot);
	constructor(who: Player, clickedEntity: Entity, position: Vector);
	constructor(...args: any[]) {
		return new PlayerInteractAtEntityEvent.$javaClass(...args);
	}
}

