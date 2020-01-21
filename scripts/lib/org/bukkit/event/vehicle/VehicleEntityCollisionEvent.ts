declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {VehicleCollisionEvent} from '../../../../org/bukkit/event/vehicle/VehicleCollisionEvent.js'

export interface VehicleEntityCollisionEvent extends VehicleCollisionEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	setCollisionCancelled(arg0: boolean): void;
	isCollisionCancelled(): boolean;
	setPickupCancelled(arg0: boolean): void;
	isPickupCancelled(): boolean;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class VehicleEntityCollisionEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleEntityCollisionEvent');
	}
	constructor(arg0: Vehicle, arg1: Entity) {
		return new VehicleEntityCollisionEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Vehicle, arg1: Entity): VehicleEntityCollisionEvent {
		return new VehicleEntityCollisionEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return VehicleEntityCollisionEvent.$javaClass.getHandlerList();
	}
}

