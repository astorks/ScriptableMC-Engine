declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BrewerInventory} from '../../../../org/bukkit/inventory/BrewerInventory.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BrewEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getContents(): BrewerInventory;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getFuelLevel(): number;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BrewEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.BrewEvent');
	}
	constructor(brewer: Block, contents: BrewerInventory, fuelLevel: number);
	constructor(...args: any[]) {
		return new BrewEvent.$javaClass(...args);
	}
}

