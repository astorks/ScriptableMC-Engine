declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {Statistic} from '../../../../org/bukkit/Statistic.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerStatisticIncrementEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	getMaterial(): Material;
	getStatistic(): Statistic;
	getEntityType(): EntityType;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getPreviousValue(): number;
	getNewValue(): number;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerStatisticIncrementEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerStatisticIncrementEvent');
	}
	constructor(arg0: Player, arg1: Statistic, arg2: number, arg3: number, arg4: EntityType) {
		return new PlayerStatisticIncrementEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new0(arg0: Player, arg1: Statistic, arg2: number, arg3: number, arg4: EntityType): PlayerStatisticIncrementEvent {
		return new PlayerStatisticIncrementEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new1(arg0: Player, arg1: Statistic, arg2: number, arg3: number): PlayerStatisticIncrementEvent {
		return new PlayerStatisticIncrementEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new2(arg0: Player, arg1: Statistic, arg2: number, arg3: number, arg4: Material): PlayerStatisticIncrementEvent {
		return new PlayerStatisticIncrementEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static getHandlerList(): HandlerList {
		return PlayerStatisticIncrementEvent.$javaClass.getHandlerList();
	}
}

