declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {VehicleCollisionEvent} from '../../../../org/bukkit/event/vehicle/VehicleCollisionEvent.js'

export interface VehicleBlockCollisionEvent extends VehicleCollisionEvent {
	getHandlers(): HandlerList;
	getBlock(): Block;
	getVehicle(): Vehicle;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class VehicleBlockCollisionEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleBlockCollisionEvent');
	}
	constructor(vehicle: Vehicle, block: Block);
	constructor(...args: any[]) {
		return new VehicleBlockCollisionEvent.$javaClass(...args);
	}
}

