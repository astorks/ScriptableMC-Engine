declare var Java: any;
import {PluginLoader} from '../../../org/bukkit/plugin/PluginLoader.js'
import {Server} from '../../../org/bukkit/Server.js'
import {PluginDescriptionFile} from '../../../org/bukkit/plugin/PluginDescriptionFile.js'
import {ChunkGenerator} from '../../../org/bukkit/generator/ChunkGenerator.js'
import {FileConfiguration} from '../../../org/bukkit/configuration/file/FileConfiguration.js'
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../org/bukkit/command/Command.js'
import {TabExecutor} from '../../../org/bukkit/command/TabExecutor.js'

export interface Plugin extends TabExecutor {
	getName(): string;
	getResource(arg0: string): any;
	getLogger(): any;
	reloadConfig(): void;
	getPluginLoader(): PluginLoader;
	isNaggable(): boolean;
	setNaggable(arg0: boolean): void;
	getDataFolder(): any;
	saveConfig(): void;
	saveDefaultConfig(): void;
	saveResource(arg0: string, arg1: boolean): void;
	getServer(): Server;
	onEnable(): void;
	onDisable(): void;
	onLoad(): void;
	isEnabled(): boolean;
	getDescription(): PluginDescriptionFile;
	getDefaultWorldGenerator(arg0: string, arg1: string): ChunkGenerator;
	getConfig(): FileConfiguration;
	onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): any;
	onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
}

export class Plugin {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.Plugin');
	}
}

