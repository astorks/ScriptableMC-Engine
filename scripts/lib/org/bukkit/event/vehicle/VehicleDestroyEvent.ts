declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {VehicleEvent} from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export interface VehicleDestroyEvent extends VehicleEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getAttacker(): Entity;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class VehicleDestroyEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleDestroyEvent');
	}
	constructor(arg0: Vehicle, arg1: Entity) {
		return new VehicleDestroyEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Vehicle, arg1: Entity): VehicleDestroyEvent {
		return new VehicleDestroyEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return VehicleDestroyEvent.$javaClass.getHandlerList();
	}
}

