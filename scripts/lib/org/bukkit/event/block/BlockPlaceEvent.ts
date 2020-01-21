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

export class BlockPlaceEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPlaceEvent');
	}
	constructor(arg0: Block, arg1: BlockState, arg2: Block, arg3: ItemStack, arg4: Player, arg5: boolean, arg6: EquipmentSlot) {
		return new BlockPlaceEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
	}
	public static new0(arg0: Block, arg1: BlockState, arg2: Block, arg3: ItemStack, arg4: Player, arg5: boolean, arg6: EquipmentSlot): BlockPlaceEvent {
		return new BlockPlaceEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
	}
	public static new1(arg0: Block, arg1: BlockState, arg2: Block, arg3: ItemStack, arg4: Player, arg5: boolean): BlockPlaceEvent {
		return new BlockPlaceEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static getHandlerList(): HandlerList {
		return BlockPlaceEvent.$javaClass.getHandlerList();
	}
}

