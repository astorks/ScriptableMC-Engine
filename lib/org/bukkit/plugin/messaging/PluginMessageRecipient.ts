declare var Java: any;
import {Plugin} from '../../../../org/bukkit/plugin/Plugin.js'

export interface PluginMessageRecipient {
	getListeningPluginChannels(): any;
	sendPluginMessage(source: Plugin, channel: string, message: Array<number>): void;
}

export class PluginMessageRecipient {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.PluginMessageRecipient');
	}
}

