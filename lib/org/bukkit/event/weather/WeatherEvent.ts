declare var Java: any;
import {World} from '../../../../org/bukkit/World.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface WeatherEvent extends Event {
	getWorld(): World;
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class WeatherEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.weather.WeatherEvent');
	}
	constructor(where: World);
	constructor(...args: any[]) {
		return new WeatherEvent.$javaClass(...args);
	}
}

