declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {VehicleCollisionEvent} from '../../../../org/bukkit/event/vehicle/VehicleCollisionEvent.js'

export interface VehicleEntityCollisionEvent extends VehicleCollisionEvent, Cancellable {
	getEntity(): Entity;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isPickupCancelled(): boolean;
	setPickupCancelled(cancel: boolean): void;
	setCollisionCancelled(cancel: boolean): void;
	isCollisionCancelled(): boolean;
	getVehicle(): Vehicle;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class VehicleEntityCollisionEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleEntityCollisionEvent');
	}
	constructor(vehicle: Vehicle, entity: Entity);
	constructor(...args: any[]) {
		return new VehicleEntityCollisionEvent.$javaClass(...args);
	}
}

