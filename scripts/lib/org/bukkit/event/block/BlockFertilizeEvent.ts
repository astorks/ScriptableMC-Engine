declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockFertilizeEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getBlocks(): any;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockFertilizeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockFertilizeEvent');
	}
	constructor(arg0: Block, arg1: Player, arg2: any) {
		return new BlockFertilizeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: Player, arg2: any): BlockFertilizeEvent {
		return new BlockFertilizeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return BlockFertilizeEvent.$javaClass.getHandlerList();
	}
}

