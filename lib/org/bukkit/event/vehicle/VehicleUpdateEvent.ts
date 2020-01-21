declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {VehicleEvent} from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export interface VehicleUpdateEvent extends VehicleEvent {
	getHandlers(): HandlerList;
	getVehicle(): Vehicle;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class VehicleUpdateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleUpdateEvent');
	}
	constructor(vehicle: Vehicle);
	constructor(...args: any[]) {
		return new VehicleUpdateEvent.$javaClass(...args);
	}
}

