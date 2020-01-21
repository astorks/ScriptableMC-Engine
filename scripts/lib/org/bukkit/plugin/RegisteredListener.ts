declare var Java: any;
import {EventPriority} from '../../../org/bukkit/event/EventPriority.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Event} from '../../../org/bukkit/event/Event.js'
import {Listener} from '../../../org/bukkit/event/Listener.js'
import {EventExecutor} from '../../../org/bukkit/plugin/EventExecutor.js'

export interface RegisteredListener {
	getPriority(): EventPriority;
	getPlugin(): Plugin;
	callEvent(arg0: Event): void;
	isIgnoringCancelled(): boolean;
	getListener(): Listener;
}

export class RegisteredListener {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.RegisteredListener');
	}
	constructor(arg0: Listener, arg1: EventExecutor, arg2: EventPriority, arg3: Plugin, arg4: boolean) {
		return new RegisteredListener.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new0(arg0: Listener, arg1: EventExecutor, arg2: EventPriority, arg3: Plugin, arg4: boolean): RegisteredListener {
		return new RegisteredListener.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
}

