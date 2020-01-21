declare var Java: any;
import {EventPriority} from '../../../org/bukkit/event/EventPriority.js'
import {Event} from '../../../org/bukkit/event/Event.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Listener} from '../../../org/bukkit/event/Listener.js'
import {EventExecutor} from '../../../org/bukkit/plugin/EventExecutor.js'

export interface RegisteredListener {
	getPriority(): EventPriority;
	callEvent(event: Event): void;
	getPlugin(): Plugin;
	isIgnoringCancelled(): boolean;
	getListener(): Listener;
}

export class RegisteredListener {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.RegisteredListener');
	}
	constructor(listener: Listener, executor: EventExecutor, priority: EventPriority, plugin: Plugin, ignoreCancelled: boolean);
	constructor(...args: any[]) {
		return new RegisteredListener.$javaClass(...args);
	}
}

