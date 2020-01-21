declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {VehicleCollisionEvent} from '../../../../org/bukkit/event/vehicle/VehicleCollisionEvent.js'

export interface VehicleBlockCollisionEvent extends VehicleCollisionEvent {
	getHandlers(): HandlerList;
	getBlock(): Block;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class VehicleBlockCollisionEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleBlockCollisionEvent');
	}
	constructor(arg0: Vehicle, arg1: Block) {
		return new VehicleBlockCollisionEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Vehicle, arg1: Block): VehicleBlockCollisionEvent {
		return new VehicleBlockCollisionEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return VehicleBlockCollisionEvent.$javaClass.getHandlerList();
	}
}

