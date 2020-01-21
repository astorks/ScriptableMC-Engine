declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Plugin} from '../../../../org/bukkit/plugin/Plugin.js'
import {PluginEvent} from '../../../../org/bukkit/event/server/PluginEvent.js'

export interface PluginDisableEvent extends PluginEvent {
	getHandlers(): HandlerList;
	getPlugin(): Plugin;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PluginDisableEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.PluginDisableEvent');
	}
	constructor(plugin: Plugin);
	constructor(...args: any[]) {
		return new PluginDisableEvent.$javaClass(...args);
	}
}

