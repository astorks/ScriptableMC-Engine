declare var Java: any;
import {ChunkGenerator} from '../../../../org/bukkit/generator/ChunkGenerator.js'
import {Server} from '../../../../org/bukkit/Server.js'
import {CommandSender} from '../../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../../org/bukkit/command/Command.js'
import {PluginDescriptionFile} from '../../../../org/bukkit/plugin/PluginDescriptionFile.js'
import {PluginLoader} from '../../../../org/bukkit/plugin/PluginLoader.js'
import {PluginCommand} from '../../../../org/bukkit/command/PluginCommand.js'
import {FileConfiguration} from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import {PluginBase} from '../../../../org/bukkit/plugin/PluginBase.js'

export interface JavaPlugin extends PluginBase {
	getResource(filename: string): any;
	getLogger(): any;
	getDefaultWorldGenerator(worldName: string, id: string): ChunkGenerator;
	getServer(): Server;
	onEnable(): void;
	onDisable(): void;
	onLoad(): void;
	getDataFolder(): any;
	saveConfig(): void;
	saveDefaultConfig(): void;
	onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): any;
	getDescription(): PluginDescriptionFile;
	onCommand(sender: CommandSender, command: Command, label: string, args: Array<string>): boolean;
	getPluginLoader(): PluginLoader;
	setNaggable(canNag: boolean): void;
	isEnabled(): boolean;
	saveResource(resourcePath: string, replace: boolean): void;
	reloadConfig(): void;
	getCommand(_name: string): PluginCommand;
	isNaggable(): boolean;
	getConfig(): FileConfiguration;
	getName(): string;
}

export class JavaPlugin {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.java.JavaPlugin');
	}
	constructor();
	constructor(...args: any[]) {
		return new JavaPlugin.$javaClass(...args);
	}
}

