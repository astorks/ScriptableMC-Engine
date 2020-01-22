declare var Java: any;
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockState} from '../../../../org/bukkit/block/BlockState.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {BlockPlaceEvent} from '../../../../org/bukkit/event/block/BlockPlaceEvent.js'

export interface BlockMultiPlaceEvent extends BlockPlaceEvent {
	getReplacedBlockStates(): any;
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

export class BlockMultiPlaceEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockMultiPlaceEvent');
	}
	constructor(states: any, clicked: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean);
	constructor(...args: any[]) {
		return new BlockMultiPlaceEvent.$javaClass(...args);
	}
}

