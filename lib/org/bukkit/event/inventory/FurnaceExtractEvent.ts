declare var Java: any;
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockExpEvent} from '../../../../org/bukkit/event/block/BlockExpEvent.js'

export interface FurnaceExtractEvent extends BlockExpEvent {
	getPlayer(): Player;
	getItemType(): Material;
	getItemAmount(): number;
	getHandlers(): HandlerList;
	getExpToDrop(): number;
	setExpToDrop(exp: number): void;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class FurnaceExtractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.FurnaceExtractEvent');
	}
	constructor(player: Player, block: Block, itemType: Material, itemAmount: number, exp: number);
	constructor(...args: any[]) {
		return new FurnaceExtractEvent.$javaClass(...args);
	}
}

