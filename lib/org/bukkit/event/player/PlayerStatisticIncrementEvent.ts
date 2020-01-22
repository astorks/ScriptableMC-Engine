declare var Java: any;
import {Material} from '../../../../org/bukkit/Material.js'
import {Statistic} from '../../../../org/bukkit/Statistic.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerStatisticIncrementEvent extends PlayerEvent, Cancellable {
	getMaterial(): Material;
	getStatistic(): Statistic;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getEntityType(): EntityType;
	getPreviousValue(): number;
	getNewValue(): number;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerStatisticIncrementEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerStatisticIncrementEvent');
	}
	constructor(player: Player, statistic: Statistic, initialValue: number, newValue: number, entityType: EntityType);
	constructor(player: Player, statistic: Statistic, initialValue: number, newValue: number);
	constructor(player: Player, statistic: Statistic, initialValue: number, newValue: number, material: Material);
	constructor(...args: any[]) {
		return new PlayerStatisticIncrementEvent.$javaClass(...args);
	}
}

