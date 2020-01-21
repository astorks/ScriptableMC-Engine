declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Hanging} from '../../../../org/bukkit/entity/Hanging.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {HangingEvent} from '../../../../org/bukkit/event/hanging/HangingEvent.js'

export interface HangingPlaceEvent extends HangingEvent, Cancellable {
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getBlock(): Block;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getBlockFace(): BlockFace;
	getEntity(): Hanging;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class HangingPlaceEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingPlaceEvent');
	}
	constructor(arg0: Hanging, arg1: Player, arg2: Block, arg3: BlockFace) {
		return new HangingPlaceEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: Hanging, arg1: Player, arg2: Block, arg3: BlockFace): HangingPlaceEvent {
		return new HangingPlaceEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static getHandlerList(): HandlerList {
		return HangingPlaceEvent.$javaClass.getHandlerList();
	}
}

