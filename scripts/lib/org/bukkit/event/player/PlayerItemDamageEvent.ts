declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerItemDamageEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	setDamage(arg0: number): void;
	getDamage(): number;
	getItem(): ItemStack;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerItemDamageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemDamageEvent');
	}
	constructor(arg0: Player, arg1: ItemStack, arg2: number) {
		return new PlayerItemDamageEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Player, arg1: ItemStack, arg2: number): PlayerItemDamageEvent {
		return new PlayerItemDamageEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PlayerItemDamageEvent.$javaClass.getHandlerList();
	}
}

