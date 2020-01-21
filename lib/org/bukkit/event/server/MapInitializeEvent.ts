declare var Java: any;
import {MapView} from '../../../../org/bukkit/map/MapView.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface MapInitializeEvent extends ServerEvent {
	getMap(): MapView;
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class MapInitializeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.MapInitializeEvent');
	}
	constructor(mapView: MapView);
	constructor(...args: any[]) {
		return new MapInitializeEvent.$javaClass(...args);
	}
}

