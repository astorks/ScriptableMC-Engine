declare var Java: any;
import {Plugin} from '../../../../org/bukkit/plugin/Plugin.js'
import {PluginMessageListener} from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js'
import {Messenger} from '../../../../org/bukkit/plugin/messaging/Messenger.js'

export interface PluginMessageListenerRegistration {
	getChannel(): string;
	getPlugin(): Plugin;
	isValid(): boolean;
	getListener(): PluginMessageListener;
}

export class PluginMessageListenerRegistration {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.PluginMessageListenerRegistration');
	}
	constructor(arg0: Messenger, arg1: Plugin, arg2: string, arg3: PluginMessageListener) {
		return new PluginMessageListenerRegistration.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: Messenger, arg1: Plugin, arg2: string, arg3: PluginMessageListener): PluginMessageListenerRegistration {
		return new PluginMessageListenerRegistration.$javaClass(arg0, arg1, arg2, arg3);
	}
}

