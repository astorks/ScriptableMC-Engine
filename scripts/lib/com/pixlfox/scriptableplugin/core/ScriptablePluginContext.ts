declare var Java: any;
import {File} from '../../../../com/pixlfox/scriptableplugin/File.js'
import {Server} from '../../../../org/bukkit/Server.js'
import {CommandAPI} from '../../../../io/github/jorelali/commandapi/api/CommandAPI.js'
import {JavaPlugin} from '../../../../org/bukkit/plugin/java/JavaPlugin.js'
import {PluginCommand} from '../../../../org/bukkit/command/PluginCommand.js'
import {EventExecutor} from '../../../../org/bukkit/plugin/EventExecutor.js'
import {CommandExecutor} from '../../../../io/github/jorelali/commandapi/api/CommandExecutor.js'
import {Value} from '../../../../org/graalvm/polyglot/Value.js'
import {ScriptablePluginEngine} from '../../../../com/pixlfox/scriptableplugin/core/ScriptablePluginEngine.js'
import {Listener} from '../../../../org/bukkit/event/Listener.js'

export interface ScriptablePluginContext extends Listener {
	getFile(pathName: string): File;
	getServer(): Server;
	getCommandApi(): CommandAPI;
	getJavaPlugin(): JavaPlugin;
	unregisterCommand(command: PluginCommand): void;
	registerEvent(eventClass: any, executor: EventExecutor): void;
	newCommand(_name: string): PluginCommand;
	registerCommandApi(_name: string, executor: CommandExecutor): void;
	registerCommand(command: PluginCommand): void;
	getPluginName(): string;
	getPluginInstance(): any;
}

export class ScriptablePluginContext {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptableplugin.core.ScriptablePluginContext');
	}
	constructor(engine: ScriptablePluginEngine, pluginName: string, pluginInstance: any) {
		return new ScriptablePluginContext.$javaClass(engine, pluginName, pluginInstance);
	}
	public static new0(engine: ScriptablePluginEngine, pluginName: string, pluginInstance: any): ScriptablePluginContext {
		return new ScriptablePluginContext.$javaClass(engine, pluginName, pluginInstance);
	}
}

