declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Plugin} from '../../../../org/bukkit/plugin/Plugin.js'
import {PluginEvent} from '../../../../org/bukkit/event/server/PluginEvent.js'

export interface PluginDisableEvent extends PluginEvent {
	getHandlers(): HandlerList;
	getPlugin(): Plugin;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PluginDisableEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.PluginDisableEvent');
	}
	constructor(arg0: Plugin) {
		return new PluginDisableEvent.$javaClass(arg0);
	}
	public static new0(arg0: Plugin): PluginDisableEvent {
		return new PluginDisableEvent.$javaClass(arg0);
	}
	public static getHandlerList(): HandlerList {
		return PluginDisableEvent.$javaClass.getHandlerList();
	}
}

