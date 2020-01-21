declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerBedLeaveEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	setSpawnLocation(arg0: boolean): void;
	shouldSetSpawnLocation(): boolean;
	getBed(): Block;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerBedLeaveEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBedLeaveEvent');
	}
	constructor(arg0: Player, arg1: Block, arg2: boolean) {
		return new PlayerBedLeaveEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Player, arg1: Block, arg2: boolean): PlayerBedLeaveEvent {
		return new PlayerBedLeaveEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PlayerBedLeaveEvent.$javaClass.getHandlerList();
	}
}

