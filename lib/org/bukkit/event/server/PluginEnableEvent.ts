declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Plugin} from '../../../../org/bukkit/plugin/Plugin.js'
import {PluginEvent} from '../../../../org/bukkit/event/server/PluginEvent.js'

export interface PluginEnableEvent extends PluginEvent {
	getHandlers(): HandlerList;
	getPlugin(): Plugin;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PluginEnableEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.PluginEnableEvent');
	}
	constructor(plugin: Plugin);
	constructor(...args: any[]) {
		return new PluginEnableEvent.$javaClass(...args);
	}
}

