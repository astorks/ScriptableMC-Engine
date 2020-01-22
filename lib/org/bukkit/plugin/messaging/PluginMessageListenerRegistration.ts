declare var Java: any;
import {PluginMessageListener} from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js'
import {Plugin} from '../../../../org/bukkit/plugin/Plugin.js'
import {Messenger} from '../../../../org/bukkit/plugin/messaging/Messenger.js'

export interface PluginMessageListenerRegistration {
	getChannel(): string;
	getListener(): PluginMessageListener;
	getPlugin(): Plugin;
	isValid(): boolean;
}

export class PluginMessageListenerRegistration {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.PluginMessageListenerRegistration');
	}
	constructor(messenger: Messenger, plugin: Plugin, channel: string, listener: PluginMessageListener);
	constructor(...args: any[]) {
		return new PluginMessageListenerRegistration.$javaClass(...args);
	}
}

