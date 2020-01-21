declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {PlayerBedEnterEvent$BedEnterResult} from '../../../../org/bukkit/event/player/PlayerBedEnterEvent$BedEnterResult.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerBedEnterEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	useBed(): Event$Result;
	getBedEnterResult(): PlayerBedEnterEvent$BedEnterResult;
	setUseBed(arg0: Event$Result): void;
	getBed(): Block;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerBedEnterEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBedEnterEvent');
	}
	constructor(arg0: Player, arg1: Block) {
		return new PlayerBedEnterEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Player, arg1: Block): PlayerBedEnterEvent {
		return new PlayerBedEnterEvent.$javaClass(arg0, arg1);
	}
	public static new1(arg0: Player, arg1: Block, arg2: PlayerBedEnterEvent$BedEnterResult): PlayerBedEnterEvent {
		return new PlayerBedEnterEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return PlayerBedEnterEvent.$javaClass.getHandlerList();
	}
}

