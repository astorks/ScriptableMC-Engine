declare var Java: any;
import {MapView} from '../../../../org/bukkit/map/MapView.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface MapInitializeEvent extends ServerEvent {
	getMap(): MapView;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class MapInitializeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.MapInitializeEvent');
	}
	constructor(arg0: MapView) {
		return new MapInitializeEvent.$javaClass(arg0);
	}
	public static new0(arg0: MapView): MapInitializeEvent {
		return new MapInitializeEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return MapInitializeEvent.$javaClass.getHandlerList();
	}
}

