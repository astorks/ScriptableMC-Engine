declare var Java: any;
import {Server} from '../../../../org/bukkit/Server.js'
import {PluginDescriptionFile} from '../../../../org/bukkit/plugin/PluginDescriptionFile.js'
import {CommandSender} from '../../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../../org/bukkit/command/Command.js'
import {ChunkGenerator} from '../../../../org/bukkit/generator/ChunkGenerator.js'
import {FileConfiguration} from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import {PluginLoader} from '../../../../org/bukkit/plugin/PluginLoader.js'
import {PluginCommand} from '../../../../org/bukkit/command/PluginCommand.js'
import {PluginBase} from '../../../../org/bukkit/plugin/PluginBase.js'

export interface JavaPlugin extends PluginBase {
	getResource(filename: string): any;
	getLogger(): any;
	onDisable(): void;
	onEnable(): void;
	getServer(): Server;
	getDescription(): PluginDescriptionFile;
	onCommand(sender: CommandSender, command: Command, label: string, args: Array<string>): boolean;
	onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): any;
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
	getCommand(_name: string): PluginCommand;
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

