declare var Java: any;
import {JavaPlugin} from '../../../../org/bukkit/plugin/java/JavaPlugin.js'
import {InventoryManager} from '../../../../fr/minuskube/inv/InventoryManager.js'
import {ScriptablePluginContext} from '../../../../com/pixlfox/scriptableplugin/core/ScriptablePluginContext.js'
import {Listener} from '../../../../org/bukkit/event/Listener.js'

export interface ScriptablePluginEngine extends Listener {
	setDebugEnabled(value: boolean): void;
	getDebugEnabled(): boolean;
	getBootstrapPlugin(): JavaPlugin;
	getRootServerFolder(): string;
	disablePlugin(pluginContext: ScriptablePluginContext): void;
	loadPlugin(scriptableClass: any): ScriptablePluginContext;
	eval(source: any): any;
	enableAllPlugins(): void;
	enablePlugin(pluginContext: ScriptablePluginContext): void;
	evalJs(source: string): any;
}

export class ScriptablePluginEngine {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptableplugin.core.ScriptablePluginEngine');
	}
	constructor(arg0: JavaPlugin, arg1: string, arg2: number, arg3: any);
	constructor(bootstrapPlugin: JavaPlugin, rootServerFolder: string);
	constructor(...args: any[]) {
		return new ScriptablePluginEngine.$javaClass(...args);
	}
}

