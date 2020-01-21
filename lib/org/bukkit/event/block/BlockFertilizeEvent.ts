declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockFertilizeEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getPlayer(): Player;
	setCancelled(cancelled: boolean): void;
	isCancelled(): boolean;
	getBlocks(): any;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockFertilizeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockFertilizeEvent');
	}
	constructor(theBlock: Block, player: Player, blocks: any);
	constructor(...args: any[]) {
		return new BlockFertilizeEvent.$javaClass(...args);
	}
}

