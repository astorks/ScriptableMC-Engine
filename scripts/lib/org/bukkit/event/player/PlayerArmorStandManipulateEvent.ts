declare var Java: any;
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {ArmorStand} from '../../../../org/bukkit/entity/ArmorStand.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerInteractEntityEvent} from '../../../../org/bukkit/event/player/PlayerInteractEntityEvent.js'

export interface PlayerArmorStandManipulateEvent extends PlayerInteractEntityEvent {
	getSlot(): EquipmentSlot;
	getHandlers(): HandlerList;
	getPlayerItem(): ItemStack;
	getArmorStandItem(): ItemStack;
	getRightClicked(): ArmorStand;
	getRightClicked(): Entity;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getHand(): EquipmentSlot;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerArmorStandManipulateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerArmorStandManipulateEvent');
	}
	constructor(arg0: Player, arg1: ArmorStand, arg2: ItemStack, arg3: ItemStack, arg4: EquipmentSlot) {
		return new PlayerArmorStandManipulateEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new0(arg0: Player, arg1: ArmorStand, arg2: ItemStack, arg3: ItemStack, arg4: EquipmentSlot): PlayerArmorStandManipulateEvent {
		return new PlayerArmorStandManipulateEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static getHandlerList(): HandlerList {
		return PlayerArmorStandManipulateEvent.$javaClass.getHandlerList();
	}
}

