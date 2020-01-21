declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {World} from '../../../../org/bukkit/World.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {WeatherEvent} from '../../../../org/bukkit/event/weather/WeatherEvent.js'

export interface WeatherChangeEvent extends WeatherEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	toWeatherState(): boolean;
	getWorld(): World;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class WeatherChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.weather.WeatherChangeEvent');
	}
	constructor(arg0: World, arg1: boolean) {
		return new WeatherChangeEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: World, arg1: boolean): WeatherChangeEvent {
		return new WeatherChangeEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return WeatherChangeEvent.$javaClass.getHandlerList();
	}
}

