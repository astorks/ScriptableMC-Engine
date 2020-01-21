declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerRiptideEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerRiptideEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerRiptideEvent');
	}
	constructor(arg0: Player, arg1: ItemStack) {
		return new PlayerRiptideEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: ItemStack): PlayerRiptideEvent {
		return new PlayerRiptideEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerRiptideEvent.$javaClass.getHandlerList();
	}
}

