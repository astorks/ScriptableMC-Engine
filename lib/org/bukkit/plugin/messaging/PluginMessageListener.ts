declare var Java: any;
import {Player} from '../../../../org/bukkit/entity/Player.js'

export interface PluginMessageListener {
	onPluginMessageReceived(channel: string, player: Player, message: Array<number>): void;
}

export class PluginMessageListener {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.PluginMessageListener');
	}
}

