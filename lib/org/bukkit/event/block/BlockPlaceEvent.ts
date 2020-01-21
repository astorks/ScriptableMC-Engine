declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {BlockState} from '../../../../org/bukkit/block/BlockState.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockPlaceEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getItemInHand(): ItemStack;
	canBuild(): boolean;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getBlockPlaced(): Block;
	getBlockAgainst(): Block;
	getHand(): EquipmentSlot;
	setBuild(canBuild: boolean): void;
	getBlockReplacedState(): BlockState;
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

