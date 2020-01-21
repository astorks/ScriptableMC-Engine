declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerItemBreakEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getBrokenItem(): ItemStack;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerItemBreakEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemBreakEvent');
	}
	constructor(player: Player, brokenItem: ItemStack);
	constructor(...args: any[]) {
		return new PlayerItemBreakEvent.$javaClass(...args);
	}
}

