declare var Java: any;
import {ServicePriority} from '../../../org/bukkit/plugin/ServicePriority.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface RegisteredServiceProvider {
	compareTo(arg0: RegisteredServiceProvider): number;
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
	constructor(arg0: any, arg1: any, arg2: ServicePriority, arg3: Plugin) {
		return new RegisteredServiceProvider.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: any, arg1: any, arg2: ServicePriority, arg3: Plugin): RegisteredServiceProvider {
		return new RegisteredServiceProvider.$javaClass(arg0, arg1, arg2, arg3);
	}
}

