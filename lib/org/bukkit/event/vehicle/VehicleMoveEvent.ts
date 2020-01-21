declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {VehicleEvent} from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export interface VehicleMoveEvent extends VehicleEvent {
	getHandlers(): HandlerList;
	getTo(): Location;
	getFrom(): Location;
	getVehicle(): Vehicle;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class VehicleMoveEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleMoveEvent');
	}
	constructor(vehicle: Vehicle, from: Location, to: Location);
	constructor(...args: any[]) {
		return new VehicleMoveEvent.$javaClass(...args);
	}
}

