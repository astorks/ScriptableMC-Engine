declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerItemConsumeEvent extends PlayerEvent, Cancellable {
	getItem(): ItemStack;
	setItem(item: ItemStack): void;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerItemConsumeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemConsumeEvent');
	}
	constructor(player: Player, item: ItemStack);
	constructor(...args: any[]) {
		return new PlayerItemConsumeEvent.$javaClass(...args);
	}
}

