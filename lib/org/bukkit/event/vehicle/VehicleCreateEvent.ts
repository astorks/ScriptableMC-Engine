declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {VehicleEvent} from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export interface VehicleCreateEvent extends VehicleEvent, Cancellable {
	getHandlers(): HandlerList;
	setCancelled(cancelled: boolean): void;
	isCancelled(): boolean;
	getVehicle(): Vehicle;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class VehicleCreateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleCreateEvent');
	}
	constructor(vehicle: Vehicle);
	constructor(...args: any[]) {
		return new VehicleCreateEvent.$javaClass(...args);
	}
}

