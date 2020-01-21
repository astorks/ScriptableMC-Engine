declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface FurnaceBurnEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	setBurnTime(arg0: number): void;
	isBurning(): boolean;
	getBurnTime(): number;
	getFuel(): ItemStack;
	setBurning(arg0: boolean): void;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class FurnaceBurnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.FurnaceBurnEvent');
	}
	constructor(arg0: Block, arg1: ItemStack, arg2: number) {
		return new FurnaceBurnEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: ItemStack, arg2: number): FurnaceBurnEvent {
		return new FurnaceBurnEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return FurnaceBurnEvent.$javaClass.getHandlerList();
	}
}

