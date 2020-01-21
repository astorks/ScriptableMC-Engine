declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface PluginIdentifiableCommand {
	getPlugin(): Plugin;
}

export class PluginIdentifiableCommand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.PluginIdentifiableCommand');
	}
}

