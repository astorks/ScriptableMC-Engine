declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerSwapHandItemsEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getMainHandItem(): ItemStack;
	setMainHandItem(arg0: ItemStack): void;
	setOffHandItem(arg0: ItemStack): void;
	getOffHandItem(): ItemStack;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerSwapHandItemsEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerSwapHandItemsEvent');
	}
	constructor(arg0: Player, arg1: ItemStack, arg2: ItemStack) {
		return new PlayerSwapHandItemsEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Player, arg1: ItemStack, arg2: ItemStack): PlayerSwapHandItemsEvent {
		return new PlayerSwapHandItemsEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PlayerSwapHandItemsEvent.$javaClass.getHandlerList();
	}
}

