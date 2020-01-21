declare var Java: any;
import {File} from '../../../../com/pixlfox/scriptableplugin/File.js'
import {SmartItemBuilder} from '../../../../com/pixlfox/scriptableplugin/smartinvs/SmartItemBuilder.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {EventExecutor} from '../../../../org/bukkit/plugin/EventExecutor.js'
import {PluginCommand} from '../../../../org/bukkit/command/PluginCommand.js'
import {CommandExecutor} from '../../../../io/github/jorelali/commandapi/api/CommandExecutor.js'
import {SmartInventoryInterface} from '../../../../com/pixlfox/scriptableplugin/smartinvs/SmartInventoryInterface.js'
import {Server} from '../../../../org/bukkit/Server.js'
import {JavaPlugin} from '../../../../org/bukkit/plugin/java/JavaPlugin.js'
import {CommandAPI} from '../../../../io/github/jorelali/commandapi/api/CommandAPI.js'
import {ScriptablePluginEngine} from '../../../../com/pixlfox/scriptableplugin/core/ScriptablePluginEngine.js'
import {Listener} from '../../../../org/bukkit/event/Listener.js'

export interface ScriptablePluginContext extends Listener {
	getFile(pathName: string): File;
	itemBuilder(itemStack: ItemStack): SmartItemBuilder;
	registerEvent(eventClass: any, executor: EventExecutor): void;
	newCommand(_name: string): PluginCommand;
	unregisterCommand(command: PluginCommand): void;
	getPluginInstance(): any;
	registerCommandApi(_name: string, executor: CommandExecutor): void;
	smartInventory(): SmartInventoryInterface;
	getPluginName(): string;
	registerCommand(command: PluginCommand): void;
	getServer(): Server;
	getJavaPlugin(): JavaPlugin;
	getCommandApi(): CommandAPI;
}

export class ScriptablePluginContext {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptableplugin.core.ScriptablePluginContext');
	}
	constructor(engine: ScriptablePluginEngine, pluginName: string, pluginInstance: any);
	constructor(...args: any[]) {
		return new ScriptablePluginContext.$javaClass(...args);
	}
}

