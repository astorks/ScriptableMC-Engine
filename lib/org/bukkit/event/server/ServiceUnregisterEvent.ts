declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {RegisteredServiceProvider} from '../../../../org/bukkit/plugin/RegisteredServiceProvider.js'
import {ServiceEvent} from '../../../../org/bukkit/event/server/ServiceEvent.js'

export interface ServiceUnregisterEvent extends ServiceEvent {
	getHandlers(): HandlerList;
	getProvider(): RegisteredServiceProvider;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ServiceUnregisterEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServiceUnregisterEvent');
	}
	constructor(serviceProvider: RegisteredServiceProvider);
	constructor(...args: any[]) {
		return new ServiceUnregisterEvent.$javaClass(...args);
	}
}

