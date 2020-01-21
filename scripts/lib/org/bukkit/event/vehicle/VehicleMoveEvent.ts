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
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class VehicleMoveEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleMoveEvent');
	}
	constructor(arg0: Vehicle, arg1: Location, arg2: Location) {
		return new VehicleMoveEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Vehicle, arg1: Location, arg2: Location): VehicleMoveEvent {
		return new VehicleMoveEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return VehicleMoveEvent.$javaClass.getHandlerList();
	}
}

