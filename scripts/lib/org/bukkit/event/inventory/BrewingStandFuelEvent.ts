declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BrewingStandFuelEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	isConsuming(): boolean;
	setFuelPower(arg0: number): void;
	setConsuming(arg0: boolean): void;
	getFuelPower(): number;
	getFuel(): ItemStack;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BrewingStandFuelEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.BrewingStandFuelEvent');
	}
	constructor(arg0: Block, arg1: ItemStack, arg2: number) {
		return new BrewingStandFuelEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: ItemStack, arg2: number): BrewingStandFuelEvent {
		return new BrewingStandFuelEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return BrewingStandFuelEvent.$javaClass.getHandlerList();
	}
}

