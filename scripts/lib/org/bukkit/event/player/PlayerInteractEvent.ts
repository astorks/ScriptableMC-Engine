declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Action} from '../../../../org/bukkit/event/block/Action.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerInteractEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	getMaterial(): Material;
	getItem(): ItemStack;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getAction(): Action;
	setUseInteractedBlock(arg0: Event$Result): void;
	useItemInHand(): Event$Result;
	useInteractedBlock(): Event$Result;
	hasItem(): boolean;
	hasBlock(): boolean;
	getClickedBlock(): Block;
	setUseItemInHand(arg0: Event$Result): void;
	isBlockInHand(): boolean;
	getBlockFace(): BlockFace;
	getHand(): EquipmentSlot;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerInteractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerInteractEvent');
	}
	constructor(arg0: Player, arg1: Action, arg2: ItemStack, arg3: Block, arg4: BlockFace, arg5: EquipmentSlot) {
		return new PlayerInteractEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new0(arg0: Player, arg1: Action, arg2: ItemStack, arg3: Block, arg4: BlockFace, arg5: EquipmentSlot): PlayerInteractEvent {
		return new PlayerInteractEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new1(arg0: Player, arg1: Action, arg2: ItemStack, arg3: Block, arg4: BlockFace): PlayerInteractEvent {
		return new PlayerInteractEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static getHandlerList(): HandlerList {
		return PlayerInteractEvent.$javaClass.getHandlerList();
	}
}

