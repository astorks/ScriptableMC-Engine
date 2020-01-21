declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Egg} from '../../../../org/bukkit/entity/Egg.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerEggThrowEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getHatchingType(): EntityType;
	setHatchingType(arg0: EntityType): void;
	getNumHatches(): number;
	getEgg(): Egg;
	setNumHatches(arg0: number): void;
	isHatching(): boolean;
	setHatching(arg0: boolean): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerEggThrowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerEggThrowEvent');
	}
	constructor(arg0: Player, arg1: Egg, arg2: boolean, arg3: number, arg4: EntityType) {
		return new PlayerEggThrowEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new0(arg0: Player, arg1: Egg, arg2: boolean, arg3: number, arg4: EntityType): PlayerEggThrowEvent {
		return new PlayerEggThrowEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static getHandlerList(): HandlerList {
		return PlayerEggThrowEvent.$javaClass.getHandlerList();
	}
}

