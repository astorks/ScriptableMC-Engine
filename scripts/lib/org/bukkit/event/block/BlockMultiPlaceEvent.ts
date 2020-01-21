declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {BlockState} from '../../../../org/bukkit/block/BlockState.js'
import {BlockPlaceEvent} from '../../../../org/bukkit/event/block/BlockPlaceEvent.js'

export interface BlockMultiPlaceEvent extends BlockPlaceEvent {
	getReplacedBlockStates(): any;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getItemInHand(): ItemStack;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	canBuild(): boolean;
	getBlockAgainst(): Block;
	getBlockPlaced(): Block;
	getHand(): EquipmentSlot;
	setBuild(arg0: boolean): void;
	getBlockReplacedState(): BlockState;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockMultiPlaceEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockMultiPlaceEvent');
	}
	constructor(arg0: any, arg1: Block, arg2: ItemStack, arg3: Player, arg4: boolean) {
		return new BlockMultiPlaceEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new0(arg0: any, arg1: Block, arg2: ItemStack, arg3: Player, arg4: boolean): BlockMultiPlaceEvent {
		return new BlockMultiPlaceEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static getHandlerList(): HandlerList {
		return BlockMultiPlaceEvent.$javaClass.getHandlerList();
	}
}

