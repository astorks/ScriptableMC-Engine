declare var Java: any;
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {VehicleEvent} from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export interface VehicleCollisionEvent extends VehicleEvent {
	getVehicle(): Vehicle;
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class VehicleCollisionEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleCollisionEvent');
	}
	constructor(vehicle: Vehicle);
	constructor(...args: any[]) {
		return new VehicleCollisionEvent.$javaClass(...args);
	}
}

