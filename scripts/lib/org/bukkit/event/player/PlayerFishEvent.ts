declare var Java: any;
import {PlayerFishEvent$State} from '../../../../org/bukkit/event/player/PlayerFishEvent$State.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {FishHook} from '../../../../org/bukkit/entity/FishHook.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerFishEvent extends PlayerEvent, Cancellable {
	getState(): PlayerFishEvent$State;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getCaught(): Entity;
	getHook(): FishHook;
	getExpToDrop(): number;
	setExpToDrop(arg0: number): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerFishEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerFishEvent');
	}
	constructor(arg0: Player, arg1: Entity, arg2: FishHook, arg3: PlayerFishEvent$State) {
		return new PlayerFishEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: Player, arg1: Entity, arg2: FishHook, arg3: PlayerFishEvent$State): PlayerFishEvent {
		return new PlayerFishEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static getHandlerList(): HandlerList {
		return PlayerFishEvent.$javaClass.getHandlerList();
	}
}

