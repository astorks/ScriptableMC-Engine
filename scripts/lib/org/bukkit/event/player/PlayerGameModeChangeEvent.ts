declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {GameMode} from '../../../../org/bukkit/GameMode.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerGameModeChangeEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getNewGameMode(): GameMode;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerGameModeChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerGameModeChangeEvent');
	}
	constructor(arg0: Player, arg1: GameMode) {
		return new PlayerGameModeChangeEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: GameMode): PlayerGameModeChangeEvent {
		return new PlayerGameModeChangeEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return PlayerGameModeChangeEvent.$javaClass.getHandlerList();
	}
}

