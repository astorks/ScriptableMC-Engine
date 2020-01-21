declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerRiptideEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerRiptideEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerRiptideEvent');
	}
	constructor(who: Player, item: ItemStack);
	constructor(...args: any[]) {
		return new PlayerRiptideEvent.$javaClass(...args);
	}
}

