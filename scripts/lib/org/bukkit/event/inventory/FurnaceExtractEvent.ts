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
	setExpToDrop(arg0: number): void;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class FurnaceExtractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.FurnaceExtractEvent');
	}
	constructor(arg0: Player, arg1: Block, arg2: Material, arg3: number, arg4: number) {
		return new FurnaceExtractEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new0(arg0: Player, arg1: Block, arg2: Material, arg3: number, arg4: number): FurnaceExtractEvent {
		return new FurnaceExtractEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static getHandlerList(): HandlerList {
		return FurnaceExtractEvent.$javaClass.getHandlerList();
	}
}

