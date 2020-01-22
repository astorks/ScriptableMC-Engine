declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {World} from '../../../../org/bukkit/World.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {WeatherEvent} from '../../../../org/bukkit/event/weather/WeatherEvent.js'

export interface ThunderChangeEvent extends WeatherEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	toThunderState(): boolean;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ThunderChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.weather.ThunderChangeEvent');
	}
	constructor(world: World, to: boolean);
	constructor(...args: any[]) {
		return new ThunderChangeEvent.$javaClass(...args);
	}
}

