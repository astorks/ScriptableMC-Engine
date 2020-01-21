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
	setBuildable(cancel: boolean): void;
	isBuildable(): boolean;
	getBlockData(): BlockData;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockCanBuildEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockCanBuildEvent');
	}
	constructor(block: Block, player: Player, type: BlockData, canBuild: boolean);
	constructor(block: Block, type: BlockData, canBuild: boolean);
	constructor(...args: any[]) {
		return new BlockCanBuildEvent.$javaClass(...args);
	}
}

