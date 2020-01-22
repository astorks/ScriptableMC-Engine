declare var Java: any;
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockState} from '../../../../org/bukkit/block/BlockState.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockPlaceEvent extends BlockEvent, Cancellable {
	getPlayer(): Player;
	getItemInHand(): ItemStack;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getBlockReplacedState(): BlockState;
	canBuild(): boolean;
	getBlockPlaced(): Block;
	getBlockAgainst(): Block;
	setBuild(canBuild: boolean): void;
	getHand(): EquipmentSlot;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockPlaceEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPlaceEvent');
	}
	constructor(placedBlock: Block, replacedBlockState: BlockState, placedAgainst: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean, hand: EquipmentSlot);
	constructor(placedBlock: Block, replacedBlockState: BlockState, placedAgainst: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean);
	constructor(...args: any[]) {
		return new BlockPlaceEvent.$javaClass(...args);
	}
}

