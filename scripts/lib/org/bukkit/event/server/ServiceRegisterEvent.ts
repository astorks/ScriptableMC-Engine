declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {RegisteredServiceProvider} from '../../../../org/bukkit/plugin/RegisteredServiceProvider.js'
import {ServiceEvent} from '../../../../org/bukkit/event/server/ServiceEvent.js'

export interface ServiceRegisterEvent extends ServiceEvent {
	getHandlers(): HandlerList;
	getProvider(): RegisteredServiceProvider;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class ServiceRegisterEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServiceRegisterEvent');
	}
	constructor(arg0: RegisteredServiceProvider) {
		return new ServiceRegisterEvent.$javaClass(arg0);
	}
	public static new0(arg0: RegisteredServiceProvider): ServiceRegisterEvent {
		return new ServiceRegisterEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return ServiceRegisterEvent.$javaClass.getHandlerList();
	}
}

