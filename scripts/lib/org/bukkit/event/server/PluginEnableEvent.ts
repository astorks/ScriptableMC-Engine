declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Plugin} from '../../../../org/bukkit/plugin/Plugin.js'
import {PluginEvent} from '../../../../org/bukkit/event/server/PluginEvent.js'

export interface PluginEnableEvent extends PluginEvent {
	getHandlers(): HandlerList;
	getPlugin(): Plugin;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PluginEnableEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.PluginEnableEvent');
	}
	constructor(arg0: Plugin) {
		return new PluginEnableEvent.$javaClass(arg0);
	}
	public static new0(arg0: Plugin): PluginEnableEvent {
		return new PluginEnableEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return PluginEnableEvent.$javaClass.getHandlerList();
	}
}

