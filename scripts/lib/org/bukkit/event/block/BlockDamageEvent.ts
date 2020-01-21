declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockDamageEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getItemInHand(): ItemStack;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	setInstaBreak(arg0: boolean): void;
	getInstaBreak(): boolean;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockDamageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockDamageEvent');
	}
	constructor(arg0: Player, arg1: Block, arg2: ItemStack, arg3: boolean) {
		return new BlockDamageEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: Player, arg1: Block, arg2: ItemStack, arg3: boolean): BlockDamageEvent {
		return new BlockDamageEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static getHandlerList(): HandlerList {
		return BlockDamageEvent.$javaClass.getHandlerList();
	}
}

