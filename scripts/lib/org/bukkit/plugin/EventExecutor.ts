declare var Java: any;
import {Listener} from '../../../org/bukkit/event/Listener.js'
import {Event} from '../../../org/bukkit/event/Event.js'

export interface EventExecutor {
	execute(arg0: Listener, arg1: Event): void;
}

export class EventExecutor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.EventExecutor');
	}
}

