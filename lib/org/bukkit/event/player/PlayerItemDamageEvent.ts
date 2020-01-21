declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerItemDamageEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	setDamage(damage: number): void;
	getItem(): ItemStack;
	getDamage(): number;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerItemDamageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemDamageEvent');
	}
	constructor(player: Player, what: ItemStack, damage: number);
	constructor(...args: any[]) {
		return new PlayerItemDamageEvent.$javaClass(...args);
	}
}

