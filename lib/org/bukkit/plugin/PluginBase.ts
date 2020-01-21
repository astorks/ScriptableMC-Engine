declare var Java: any;
import {Server} from '../../../org/bukkit/Server.js'
import {PluginDescriptionFile} from '../../../org/bukkit/plugin/PluginDescriptionFile.js'
import {ChunkGenerator} from '../../../org/bukkit/generator/ChunkGenerator.js'
import {FileConfiguration} from '../../../org/bukkit/configuration/file/FileConfiguration.js'
import {PluginLoader} from '../../../org/bukkit/plugin/PluginLoader.js'
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../org/bukkit/command/Command.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface PluginBase extends Plugin {
	getName(): string;
	getResource(filename: string): any;
	getLogger(): any;
	onDisable(): void;
	onEnable(): void;
	getServer(): Server;
	getDescription(): PluginDescriptionFile;
	isEnabled(): boolean;
	onLoad(): void;
	getDefaultWorldGenerator(worldName: string, id: string): ChunkGenerator;
	getConfig(): FileConfiguration;
	setNaggable(canNag: boolean): void;
	getDataFolder(): any;
	saveConfig(): void;
	reloadConfig(): void;
	isNaggable(): boolean;
	saveDefaultConfig(): void;
	saveResource(resourcePath: string, replace: boolean): void;
	getPluginLoader(): PluginLoader;
	onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): any;
	onCommand(sender: CommandSender, command: Command, label: string, args: Array<string>): boolean;
}

export class PluginBase {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginBase');
	}
	constructor();
	constructor(...args: any[]) {
		return new PluginBase.$javaClass(...args);
	}
}

