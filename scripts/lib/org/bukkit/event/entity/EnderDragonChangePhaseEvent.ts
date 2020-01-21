declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EnderDragon} from '../../../../org/bukkit/entity/EnderDragon.js'
import {EnderDragon$Phase} from '../../../../org/bukkit/entity/EnderDragon$Phase.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EnderDragonChangePhaseEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): EnderDragon;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getNewPhase(): EnderDragon$Phase;
	getCurrentPhase(): EnderDragon$Phase;
	setNewPhase(arg0: EnderDragon$Phase): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EnderDragonChangePhaseEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EnderDragonChangePhaseEvent');
	}
	constructor(arg0: EnderDragon, arg1: EnderDragon$Phase, arg2: EnderDragon$Phase) {
		return new EnderDragonChangePhaseEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: EnderDragon, arg1: EnderDragon$Phase, arg2: EnderDragon$Phase): EnderDragonChangePhaseEvent {
		return new EnderDragonChangePhaseEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return EnderDragonChangePhaseEvent.$javaClass.getHandlerList();
	}
}

