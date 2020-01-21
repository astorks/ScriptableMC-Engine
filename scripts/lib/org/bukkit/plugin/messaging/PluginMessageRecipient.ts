declare var Java: any;
import {Plugin} from '../../../../org/bukkit/plugin/Plugin.js'

export interface PluginMessageRecipient {
	getListeningPluginChannels(): any;
	sendPluginMessage(arg0: Plugin, arg1: string, arg2: Array<number>): void;
}

export class PluginMessageRecipient {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.PluginMessageRecipient');
	}
}

