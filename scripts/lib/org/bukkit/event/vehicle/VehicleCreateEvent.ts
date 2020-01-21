declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {VehicleEvent} from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export interface VehicleCreateEvent extends VehicleEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class VehicleCreateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleCreateEvent');
	}
	constructor(arg0: Vehicle) {
		return new VehicleCreateEvent.$javaClass(arg0);
	}
	public static new0(arg0: Vehicle): VehicleCreateEvent {
		return new VehicleCreateEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return VehicleCreateEvent.$javaClass.getHandlerList();
	}
}

