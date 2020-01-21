declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {VehicleEvent} from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export interface VehicleUpdateEvent extends VehicleEvent {
	getHandlers(): HandlerList;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class VehicleUpdateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleUpdateEvent');
	}
	constructor(arg0: Vehicle) {
		return new VehicleUpdateEvent.$javaClass(arg0);
	}
	public static new0(arg0: Vehicle): VehicleUpdateEvent {
		return new VehicleUpdateEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return VehicleUpdateEvent.$javaClass.getHandlerList();
	}
}

