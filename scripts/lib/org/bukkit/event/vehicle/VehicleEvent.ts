declare var Java: any;
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface VehicleEvent extends Event {
	getVehicle(): Vehicle;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class VehicleEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleEvent');
	}
	constructor(arg0: Vehicle) {
		return new VehicleEvent.$javaClass(arg0);
	}
	public static new0(arg0: Vehicle): VehicleEvent {
		return new VehicleEvent.$javaClass(arg0);
	}
}

