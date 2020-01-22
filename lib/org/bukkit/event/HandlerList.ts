declare var Java: any;
import {RegisteredListener} from '../../../org/bukkit/plugin/RegisteredListener.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Listener} from '../../../org/bukkit/event/Listener.js'

export interface HandlerList {
	register(listener: RegisteredListener): void;
	unregister(listener: RegisteredListener): void;
	unregister(plugin: Plugin): void;
	unregister(listener: Listener): void;
	registerAll(listeners: any): void;
	bake(): void;
	getRegisteredListeners(): Array<RegisteredListener>;
}

export class HandlerList {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.HandlerList');
	}
	constructor();
	constructor(...args: any[]) {
		return new HandlerList.$javaClass(...args);
	}
}

