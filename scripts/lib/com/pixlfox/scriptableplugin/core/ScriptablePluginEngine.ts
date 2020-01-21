declare var Java: any;
import {JavaPlugin} from '../../../../org/bukkit/plugin/java/JavaPlugin.js'
import {Value} from '../../../../org/graalvm/polyglot/Value.js'
import {Source} from '../../../../org/graalvm/polyglot/Source.js'
import {ScriptablePluginContext} from '../../../../com/pixlfox/scriptableplugin/core/ScriptablePluginContext.js'
import {Listener} from '../../../../org/bukkit/event/Listener.js'

export interface ScriptablePluginEngine extends Listener {
	getRootServerFolder(): string;
	getDebugEnabled(): boolean;
	getBootstrapPlugin(): JavaPlugin;
	enableAllPlugins(): void;
	evalJs(source: string): any;
	eval(source: Source): any;
	enablePlugin(pluginContext: ScriptablePluginContext): void;
	setDebugEnabled(value: boolean): void;
	disablePlugin(pluginContext: ScriptablePluginContext): void;
	loadPlugin(scriptableClass: any): ScriptablePluginContext;
}

export class ScriptablePluginEngine {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptableplugin.core.ScriptablePluginEngine');
	}
	constructor(arg0: JavaPlugin, arg1: string, arg2: number, arg3: any) {
		return new ScriptablePluginEngine.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: JavaPlugin, arg1: string, arg2: number, arg3: any): ScriptablePluginEngine {
		return new ScriptablePluginEngine.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new1(bootstrapPlugin: JavaPlugin, rootServerFolder: string): ScriptablePluginEngine {
		return new ScriptablePluginEngine.$javaClass(bootstrapPlugin, rootServerFolder);
	}
	public static access$getInst$cp(): ScriptablePluginEngine {
		return ScriptablePluginEngine.$javaClass.access$getInst$cp();
	}
	public static access$setInst$cp(arg0: ScriptablePluginEngine): void {
		return ScriptablePluginEngine.$javaClass.access$setInst$cp(arg0);
	}
}

