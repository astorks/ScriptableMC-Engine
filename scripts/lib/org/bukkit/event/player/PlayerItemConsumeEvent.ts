declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerItemConsumeEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	setItem(arg0: ItemStack): void;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerItemConsumeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemConsumeEvent');
	}
	constructor(arg0: Player, arg1: ItemStack) {
		return new PlayerItemConsumeEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: ItemStack): PlayerItemConsumeEvent {
		return new PlayerItemConsumeEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerItemConsumeEvent.$javaClass.getHandlerList();
	}
}

