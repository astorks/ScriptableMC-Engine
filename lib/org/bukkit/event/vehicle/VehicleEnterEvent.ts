declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {VehicleEvent} from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export interface VehicleEnterEvent extends VehicleEvent, Cancellable {
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getEntered(): Entity;
	getVehicle(): Vehicle;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class VehicleEnterEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleEnterEvent');
	}
	constructor(vehicle: Vehicle, entered: Entity);
	constructor(...args: any[]) {
		return new VehicleEnterEvent.$javaClass(...args);
	}
}

