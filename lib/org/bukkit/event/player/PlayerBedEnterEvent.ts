declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {PlayerBedEnterEvent$BedEnterResult} from '../../../../org/bukkit/event/player/PlayerBedEnterEvent$BedEnterResult.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerBedEnterEvent extends PlayerEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	useBed(): Event$Result;
	getBed(): Block;
	setUseBed(useBed: Event$Result): void;
	getBedEnterResult(): PlayerBedEnterEvent$BedEnterResult;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerBedEnterEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBedEnterEvent');
	}
	constructor(who: Player, bed: Block);
	constructor(who: Player, bed: Block, bedEnterResult: PlayerBedEnterEvent$BedEnterResult);
	constructor(...args: any[]) {
		return new PlayerBedEnterEvent.$javaClass(...args);
	}
}

