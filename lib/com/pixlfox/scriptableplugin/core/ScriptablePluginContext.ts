declare var Java: any;
import {File} from '../../../../com/pixlfox/scriptableplugin/File.js'
import {PluginMessageListenerRegistration} from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js'
import {PluginMessageListener} from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js'
import {JavaPlugin} from '../../../../org/bukkit/plugin/java/JavaPlugin.js'
import {Server} from '../../../../org/bukkit/Server.js'
import {SmartInventoryInterface} from '../../../../com/pixlfox/scriptableplugin/smartinvs/SmartInventoryInterface.js'
import {CommandExecutor} from '../../../../io/github/jorelali/commandapi/api/CommandExecutor.js'
import {CommandAPI} from '../../../../io/github/jorelali/commandapi/api/CommandAPI.js'
import {PluginCommand} from '../../../../org/bukkit/command/PluginCommand.js'
import {SmartItemBuilder} from '../../../../com/pixlfox/scriptableplugin/smartinvs/SmartItemBuilder.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {EventExecutor} from '../../../../org/bukkit/plugin/EventExecutor.js'
import {ScriptablePluginEngine} from '../../../../com/pixlfox/scriptableplugin/core/ScriptablePluginEngine.js'
import {Listener} from '../../../../org/bukkit/event/Listener.js'

export interface ScriptablePluginContext extends Listener {
	getFile(pathName: string): File;
	registerOutgoingPluginChannel(channel: string): void;
	unregisterOutgoingPluginChannel(channel: string): void;
	registerIncomingPluginChannel(channelName: string, listener: PluginMessageListener): PluginMessageListenerRegistration;
	unregisterIncomingPluginChannel(messageListenerRegistration: PluginMessageListenerRegistration): void;
	getJavaPlugin(): JavaPlugin;
	getServer(): Server;
	smartInventory(): SmartInventoryInterface;
	getPluginInstance(): any;
	registerCommandApi(_name: string, executor: CommandExecutor): void;
	getCommandApi(): CommandAPI;
	newCommand(_name: string): PluginCommand;
	itemBuilder(itemStack: ItemStack): SmartItemBuilder;
	registerEvent(eventClass: any, executor: EventExecutor): void;
	unregisterCommand(command: PluginCommand): void;
	registerCommand(command: PluginCommand): void;
	getPluginName(): string;
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

