declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {RegisteredServiceProvider} from '../../../../org/bukkit/plugin/RegisteredServiceProvider.js'
import {ServiceEvent} from '../../../../org/bukkit/event/server/ServiceEvent.js'

export interface ServiceUnregisterEvent extends ServiceEvent {
	getHandlers(): HandlerList;
	getProvider(): RegisteredServiceProvider;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class ServiceUnregisterEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServiceUnregisterEvent');
	}
	constructor(arg0: RegisteredServiceProvider) {
		return new ServiceUnregisterEvent.$javaClass(arg0);
	}
	public static new0(arg0: RegisteredServiceProvider): ServiceUnregisterEvent {
		return new ServiceUnregisterEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return ServiceUnregisterEvent.$javaClass.getHandlerList();
	}
}

