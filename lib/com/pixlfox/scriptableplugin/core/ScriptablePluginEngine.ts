declare var Java: any;
import {InventoryManager} from '../../../../fr/minuskube/inv/InventoryManager.js'
import {JavaPlugin} from '../../../../org/bukkit/plugin/java/JavaPlugin.js'
import {ScriptablePluginContext} from '../../../../com/pixlfox/scriptableplugin/core/ScriptablePluginContext.js'
import {Listener} from '../../../../org/bukkit/event/Listener.js'

export interface ScriptablePluginEngine extends Listener {
	getRootServerFolder(): string;
	getBootstrapPlugin(): JavaPlugin;
	eval(source: any): any;
	evalJs(source: string): any;
	setDebugEnabled(value: boolean): void;
	getDebugEnabled(): boolean;
	enableAllPlugins(): void;
	enablePlugin(pluginContext: ScriptablePluginContext): void;
	disablePlugin(pluginContext: ScriptablePluginContext): void;
	loadPlugin(scriptableClass: any): ScriptablePluginContext;
}

export class ScriptablePluginEngine {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptableplugin.core.ScriptablePluginEngine');
	}
	constructor(bootstrapPlugin: JavaPlugin, rootServerFolder: string);
	constructor(arg0: JavaPlugin, arg1: string, arg2: number, arg3: any);
	constructor(...args: any[]) {
		return new ScriptablePluginEngine.$javaClass(...args);
	}
}

