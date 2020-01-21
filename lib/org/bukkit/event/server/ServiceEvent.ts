declare var Java: any;
import {RegisteredServiceProvider} from '../../../../org/bukkit/plugin/RegisteredServiceProvider.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface ServiceEvent extends ServerEvent {
	getProvider(): RegisteredServiceProvider;
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ServiceEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServiceEvent');
	}
	constructor(provider: RegisteredServiceProvider);
	constructor(...args: any[]) {
		return new ServiceEvent.$javaClass(...args);
	}
}

