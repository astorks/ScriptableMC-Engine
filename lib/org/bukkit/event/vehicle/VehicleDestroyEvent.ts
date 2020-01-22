declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {VehicleEvent} from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export interface VehicleDestroyEvent extends VehicleEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getAttacker(): Entity;
	getVehicle(): Vehicle;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class VehicleDestroyEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleDestroyEvent');
	}
	constructor(vehicle: Vehicle, attacker: Entity);
	constructor(...args: any[]) {
		return new VehicleDestroyEvent.$javaClass(...args);
	}
}

