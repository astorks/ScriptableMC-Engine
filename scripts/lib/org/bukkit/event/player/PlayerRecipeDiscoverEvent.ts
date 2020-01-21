declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {NamespacedKey} from '../../../../org/bukkit/NamespacedKey.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerRecipeDiscoverEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	getRecipe(): NamespacedKey;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerRecipeDiscoverEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerRecipeDiscoverEvent');
	}
	constructor(arg0: Player, arg1: NamespacedKey) {
		return new PlayerRecipeDiscoverEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: NamespacedKey): PlayerRecipeDiscoverEvent {
		return new PlayerRecipeDiscoverEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerRecipeDiscoverEvent.$javaClass.getHandlerList();
	}
}

