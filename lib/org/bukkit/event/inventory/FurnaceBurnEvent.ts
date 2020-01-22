declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface FurnaceBurnEvent extends BlockEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getBurnTime(): number;
	getFuel(): ItemStack;
	setBurnTime(burnTime: number): void;
	isBurning(): boolean;
	setBurning(burning: boolean): void;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class FurnaceBurnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.FurnaceBurnEvent');
	}
	constructor(furnace: Block, fuel: ItemStack, burnTime: number);
	constructor(...args: any[]) {
		return new FurnaceBurnEvent.$javaClass(...args);
	}
}

