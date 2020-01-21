declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {CauldronLevelChangeEvent$ChangeReason} from '../../../../org/bukkit/event/block/CauldronLevelChangeEvent$ChangeReason.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface CauldronLevelChangeEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getReason(): CauldronLevelChangeEvent$ChangeReason;
	getOldLevel(): number;
	setNewLevel(arg0: number): void;
	getNewLevel(): number;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class CauldronLevelChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.CauldronLevelChangeEvent');
	}
	constructor(arg0: Block, arg1: Entity, arg2: CauldronLevelChangeEvent$ChangeReason, arg3: number, arg4: number) {
		return new CauldronLevelChangeEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new0(arg0: Block, arg1: Entity, arg2: CauldronLevelChangeEvent$ChangeReason, arg3: number, arg4: number): CauldronLevelChangeEvent {
		return new CauldronLevelChangeEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static getHandlerList(): HandlerList {
		return CauldronLevelChangeEvent.$javaClass.getHandlerList();
	}
}

