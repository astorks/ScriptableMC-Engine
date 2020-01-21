declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerInteractEntityEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getHand(): EquipmentSlot;
	getRightClicked(): Entity;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerInteractEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerInteractEntityEvent');
	}
	constructor(who: Player, clickedEntity: Entity, hand: EquipmentSlot);
	constructor(who: Player, clickedEntity: Entity);
	constructor(...args: any[]) {
		return new PlayerInteractEntityEvent.$javaClass(...args);
	}
}

