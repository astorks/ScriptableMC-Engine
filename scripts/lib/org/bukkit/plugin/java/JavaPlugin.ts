declare var Java: any;
import {PluginLoader} from '../../../../org/bukkit/plugin/PluginLoader.js'
import {Server} from '../../../../org/bukkit/Server.js'
import {CommandSender} from '../../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../../org/bukkit/command/Command.js'
import {PluginDescriptionFile} from '../../../../org/bukkit/plugin/PluginDescriptionFile.js'
import {ChunkGenerator} from '../../../../org/bukkit/generator/ChunkGenerator.js'
import {FileConfiguration} from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import {PluginCommand} from '../../../../org/bukkit/command/PluginCommand.js'
import {PluginBase} from '../../../../org/bukkit/plugin/PluginBase.js'

export interface JavaPlugin extends PluginBase {
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
	onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
	isEnabled(): boolean;
	getDescription(): PluginDescriptionFile;
	onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): any;
	getDefaultWorldGenerator(arg0: string, arg1: string): ChunkGenerator;
	getConfig(): FileConfiguration;
	getCommand(arg0: string): PluginCommand;
	getName(): string;
}

export class JavaPlugin {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.java.JavaPlugin');
	}
	constructor() {
		return new JavaPlugin.$javaClass();
	}
	public static new0(): JavaPlugin {
		return new JavaPlugin.$javaClass();
	}
	public static getPlugin(arg0: any): JavaPlugin {
		return JavaPlugin.$javaClass.getPlugin(arg0);
	}
	public static getProvidingPlugin(arg0: any): JavaPlugin {
		return JavaPlugin.$javaClass.getProvidingPlugin(arg0);
	}
}

