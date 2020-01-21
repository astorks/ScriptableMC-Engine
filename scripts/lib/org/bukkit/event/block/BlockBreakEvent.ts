declare var Java: any;
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockExpEvent} from '../../../../org/bukkit/event/block/BlockExpEvent.js'

export interface BlockBreakEvent extends BlockExpEvent, Cancellable {
	getPlayer(): Player;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	isDropItems(): boolean;
	setDropItems(arg0: boolean): void;
	getHandlers(): HandlerList;
	getExpToDrop(): number;
	setExpToDrop(arg0: number): void;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockBreakEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockBreakEvent');
	}
	constructor(arg0: Block, arg1: Player) {
		return new BlockBreakEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Block, arg1: Player): BlockBreakEvent {
		return new BlockBreakEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return BlockBreakEvent.$javaClass.getHandlerList();
	}
}

