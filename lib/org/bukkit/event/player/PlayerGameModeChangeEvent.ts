declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {GameMode} from '../../../../org/bukkit/GameMode.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerGameModeChangeEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getNewGameMode(): GameMode;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerGameModeChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerGameModeChangeEvent');
	}
	constructor(player: Player, newGameMode: GameMode);
	constructor(...args: any[]) {
		return new PlayerGameModeChangeEvent.$javaClass(...args);
	}
}

