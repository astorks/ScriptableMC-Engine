declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {BlockData} from '../../../../org/bukkit/block/data/BlockData.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockCanBuildEvent extends BlockEvent {
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getMaterial(): Material;
	getBlockData(): BlockData;
	isBuildable(): boolean;
	setBuildable(arg0: boolean): void;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockCanBuildEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockCanBuildEvent');
	}
	constructor(arg0: Block, arg1: Player, arg2: BlockData, arg3: boolean) {
		return new BlockCanBuildEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: Block, arg1: Player, arg2: BlockData, arg3: boolean): BlockCanBuildEvent {
		return new BlockCanBuildEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new1(arg0: Block, arg1: BlockData, arg2: boolean): BlockCanBuildEvent {
		return new BlockCanBuildEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return BlockCanBuildEvent.$javaClass.getHandlerList();
	}
}

