declare var Java: any;
import {World} from '../../../../org/bukkit/World.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface WeatherEvent extends Event {
	getWorld(): World;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class WeatherEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.weather.WeatherEvent');
	}
	constructor(arg0: World) {
		return new WeatherEvent.$javaClass(arg0);
	}
	public static new0(arg0: World): WeatherEvent {
		return new WeatherEvent.$javaClass(arg0);
	}
}

