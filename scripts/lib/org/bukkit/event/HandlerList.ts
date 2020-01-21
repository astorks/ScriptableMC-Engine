declare var Java: any;
import {RegisteredListener} from '../../../org/bukkit/plugin/RegisteredListener.js'
import {Listener} from '../../../org/bukkit/event/Listener.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface HandlerList {
	register(arg0: RegisteredListener): void;
	unregister(arg0: Listener): void;
	unregister(arg0: RegisteredListener): void;
	unregister(arg0: Plugin): void;
	getRegisteredListeners(): Array<RegisteredListener>;
	bake(): void;
	registerAll(arg0: any): void;
}

export class HandlerList {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.HandlerList');
	}
	constructor() {
		return new HandlerList.$javaClass();
	}
	public static new0(): HandlerList {
		return new HandlerList.$javaClass();
	}
	public static unregisterAll(arg0: Plugin): void {
		return HandlerList.$javaClass.unregisterAll(arg0);
	}
	public static unregisterAll0(): void {
		return HandlerList.$javaClass.unregisterAll();
	}
	public static unregisterAll1(arg0: Listener): void {
		return HandlerList.$javaClass.unregisterAll(arg0);
	}
	public static getRegisteredListeners0(arg0: Plugin): any {
		return HandlerList.$javaClass.getRegisteredListeners(arg0);
	}
	public static bakeAll(): void {
		return HandlerList.$javaClass.bakeAll();
	}
	public static getHandlerLists(): any {
		return HandlerList.$javaClass.getHandlerLists();
	}
}

