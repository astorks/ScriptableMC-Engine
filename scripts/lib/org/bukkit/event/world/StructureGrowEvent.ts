declare var Java: any;
import {Location} from '../../../../org/bukkit/Location.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {TreeType} from '../../../../org/bukkit/TreeType.js'
import {World} from '../../../../org/bukkit/World.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {WorldEvent} from '../../../../org/bukkit/event/world/WorldEvent.js'

export interface StructureGrowEvent extends WorldEvent, Cancellable {
	getLocation(): Location;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	isFromBonemeal(): boolean;
	getSpecies(): TreeType;
	getBlocks(): any;
	getWorld(): World;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class StructureGrowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.StructureGrowEvent');
	}
	constructor(arg0: Location, arg1: TreeType, arg2: boolean, arg3: Player, arg4: any) {
		return new StructureGrowEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new0(arg0: Location, arg1: TreeType, arg2: boolean, arg3: Player, arg4: any): StructureGrowEvent {
		return new StructureGrowEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static getHandlerList(): HandlerList {
		return StructureGrowEvent.$javaClass.getHandlerList();
	}
}

