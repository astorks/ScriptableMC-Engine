declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {VehicleEvent} from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export interface VehicleDamageEvent extends VehicleEvent, Cancellable {
	getHandlers(): HandlerList;
	setDamage(arg0: number): void;
	getDamage(): number;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getAttacker(): Entity;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class VehicleDamageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleDamageEvent');
	}
	constructor(arg0: Vehicle, arg1: Entity, arg2: number) {
		return new VehicleDamageEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Vehicle, arg1: Entity, arg2: number): VehicleDamageEvent {
		return new VehicleDamageEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return VehicleDamageEvent.$javaClass.getHandlerList();
	}
}

