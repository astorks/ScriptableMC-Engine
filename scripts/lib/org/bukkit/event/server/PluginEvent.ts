declare var Java: any;
import {Plugin} from '../../../../org/bukkit/plugin/Plugin.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface PluginEvent extends ServerEvent {
	getPlugin(): Plugin;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PluginEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.PluginEvent');
	}
	constructor(arg0: Plugin) {
		return new PluginEvent.$javaClass(arg0);
	}
	public static new0(arg0: Plugin): PluginEvent {
		return new PluginEvent.$javaClass(arg0);
	}
}

