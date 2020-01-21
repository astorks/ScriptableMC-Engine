declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Vehicle} from '../../../../org/bukkit/entity/Vehicle.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {VehicleEvent} from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export interface VehicleExitEvent extends VehicleEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getExited(): LivingEntity;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class VehicleExitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleExitEvent');
	}
	constructor(arg0: Vehicle, arg1: LivingEntity) {
		return new VehicleExitEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Vehicle, arg1: LivingEntity): VehicleExitEvent {
		return new VehicleExitEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return VehicleExitEvent.$javaClass.getHandlerList();
	}
}

