declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {VehicleEvent} from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export interface VehicleEnterEvent extends VehicleEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getEntered(): Entity;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class VehicleEnterEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleEnterEvent');
	}
	constructor(arg0: Vehicle, arg1: Entity) {
		return new VehicleEnterEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Vehicle, arg1: Entity): VehicleEnterEvent {
		return new VehicleEnterEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return VehicleEnterEvent.$javaClass.getHandlerList();
	}
}

