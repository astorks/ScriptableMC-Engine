declare var Java: any;
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {VehicleEvent} from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export interface VehicleCollisionEvent extends VehicleEvent {
	getVehicle(): Vehicle;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class VehicleCollisionEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleCollisionEvent');
	}
	constructor(arg0: Vehicle) {
		return new VehicleCollisionEvent.$javaClass(arg0);
	}
	public static new0(arg0: Vehicle): VehicleCollisionEvent {
		return new VehicleCollisionEvent.$javaClass(arg0);
	}
}

