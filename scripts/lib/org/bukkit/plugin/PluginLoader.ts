declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Listener} from '../../../org/bukkit/event/Listener.js'
import {PluginDescriptionFile} from '../../../org/bukkit/plugin/PluginDescriptionFile.js'

export interface PluginLoader {
	enablePlugin(arg0: Plugin): void;
	disablePlugin(arg0: Plugin): void;
	loadPlugin(arg0: any): Plugin;
	createRegisteredListeners(arg0: Listener, arg1: Plugin): any;
	getPluginDescription(arg0: any): PluginDescriptionFile;
	getPluginFileFilters(): Array<any>;
}

export class PluginLoader {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginLoader');
	}
}

