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
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getLightning(): LightningStrike;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class LightningStrikeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.weather.LightningStrikeEvent');
	}
	constructor(world: World, bolt: LightningStrike, cause: LightningStrikeEvent$Cause);
	constructor(world: World, bolt: LightningStrike);
	constructor(...args: any[]) {
		return new LightningStrikeEvent.$javaClass(...args);
	}
}

