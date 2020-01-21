declare var Java: any;
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface VehicleEvent extends Event {
	getVehicle(): Vehicle;
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class VehicleEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleEvent');
	}
	constructor(vehicle: Vehicle);
	constructor(...args: any[]) {
		return new VehicleEvent.$javaClass(...args);
	}
}

