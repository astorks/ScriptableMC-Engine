declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockCookEvent} from '../../../../org/bukkit/event/block/BlockCookEvent.js'

export interface FurnaceSmeltEvent extends BlockCookEvent {
	getResult(): ItemStack;
	setResult(result: ItemStack): void;
	getHandlers(): HandlerList;
	getSource(): ItemStack;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class FurnaceSmeltEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.FurnaceSmeltEvent');
	}
	constructor(furnace: Block, source: ItemStack, result: ItemStack);
	constructor(...args: any[]) {
		return new FurnaceSmeltEvent.$javaClass(...args);
	}
}

