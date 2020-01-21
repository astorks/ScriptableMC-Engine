declare var Java: any;
import {LightningStrikeEvent$Cause} from '../../../../org/bukkit/event/weather/LightningStrikeEvent$Cause.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {LightningStrike} from '../../../../org/bukkit/entity/LightningStrike.js'
import {World} from '../../../../org/bukkit/World.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {WeatherEvent} from '../../../../org/bukkit/event/weather/WeatherEvent.js'

export interface LightningStrikeEvent extends WeatherEvent, Cancellable {
	getCause(): LightningStrikeEvent$Cause;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getLightning(): LightningStrike;
	getWorld(): World;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class LightningStrikeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.weather.LightningStrikeEvent');
	}
	constructor(arg0: World, arg1: LightningStrike, arg2: LightningStrikeEvent$Cause) {
		return new LightningStrikeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: World, arg1: LightningStrike, arg2: LightningStrikeEvent$Cause): LightningStrikeEvent {
		return new LightningStrikeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: World, arg1: LightningStrike): LightningStrikeEvent {
		return new LightningStrikeEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return LightningStrikeEvent.$javaClass.getHandlerList();
	}
}

