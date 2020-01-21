declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {Action} from '../../../../org/bukkit/event/block/Action.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerInteractEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	getMaterial(): Material;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getAction(): Action;
	getBlockFace(): BlockFace;
	getHand(): EquipmentSlot;
	setUseInteractedBlock(useInteractedBlock: Event$Result): void;
	hasBlock(): boolean;
	useInteractedBlock(): Event$Result;
	hasItem(): boolean;
	setUseItemInHand(useItemInHand: Event$Result): void;
	isBlockInHand(): boolean;
	useItemInHand(): Event$Result;
	getClickedBlock(): Block;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerInteractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerInteractEvent');
	}
	constructor(who: Player, action: Action, item: ItemStack, clickedBlock: Block, clickedFace: BlockFace, hand: EquipmentSlot);
	constructor(who: Player, action: Action, item: ItemStack, clickedBlock: Block, clickedFace: BlockFace);
	constructor(...args: any[]) {
		return new PlayerInteractEvent.$javaClass(...args);
	}
}

