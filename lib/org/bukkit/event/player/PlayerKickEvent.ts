declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerKickEvent extends PlayerEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getLeaveMessage(): string;
	setLeaveMessage(leaveMessage: string): void;
	getReason(): string;
	setReason(kickReason: string): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerKickEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerKickEvent');
	}
	constructor(playerKicked: Player, kickReason: string, leaveMessage: string);
	constructor(...args: any[]) {
		return new PlayerKickEvent.$javaClass(...args);
	}
}

