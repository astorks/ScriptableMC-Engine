declare var Java: any;
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Hanging} from '../../../../org/bukkit/entity/Hanging.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {HangingEvent} from '../../../../org/bukkit/event/hanging/HangingEvent.js'

export interface HangingPlaceEvent extends HangingEvent, Cancellable {
	getPlayer(): Player;
	getBlock(): Block;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getBlockFace(): BlockFace;
	getEntity(): Hanging;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class HangingPlaceEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingPlaceEvent');
	}
	constructor(hanging: Hanging, player: Player, block: Block, blockFace: BlockFace);
	constructor(...args: any[]) {
		return new HangingPlaceEvent.$javaClass(...args);
	}
}

