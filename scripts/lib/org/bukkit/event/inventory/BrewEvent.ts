declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BrewerInventory} from '../../../../org/bukkit/inventory/BrewerInventory.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BrewEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getContents(): BrewerInventory;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getFuelLevel(): number;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BrewEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.BrewEvent');
	}
	constructor(arg0: Block, arg1: BrewerInventory, arg2: number) {
		return new BrewEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: BrewerInventory, arg2: number): BrewEvent {
		return new BrewEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return BrewEvent.$javaClass.getHandlerList();
	}
}

