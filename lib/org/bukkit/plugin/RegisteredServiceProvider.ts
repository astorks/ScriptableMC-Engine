declare var Java: any;
import {ServicePriority} from '../../../org/bukkit/plugin/ServicePriority.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface RegisteredServiceProvider {
	compareTo(other: RegisteredServiceProvider): number;
	compareTo(arg0: any): number;
	getPriority(): ServicePriority;
	getProvider(): any;
	getPlugin(): Plugin;
	getService(): any;
}

export class RegisteredServiceProvider {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.RegisteredServiceProvider');
	}
	constructor(service: any, provider: any, priority: ServicePriority, plugin: Plugin);
	constructor(...args: any[]) {
		return new RegisteredServiceProvider.$javaClass(...args);
	}
}

