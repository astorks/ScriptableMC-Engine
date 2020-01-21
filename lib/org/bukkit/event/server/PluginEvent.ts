declare var Java: any;
import {Plugin} from '../../../../org/bukkit/plugin/Plugin.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface PluginEvent extends ServerEvent {
	getPlugin(): Plugin;
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PluginEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.PluginEvent');
	}
	constructor(plugin: Plugin);
	constructor(...args: any[]) {
		return new PluginEvent.$javaClass(...args);
	}
}

