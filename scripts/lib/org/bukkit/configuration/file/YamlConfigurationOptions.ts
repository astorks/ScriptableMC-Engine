declare var Java: any;
import {FileConfigurationOptions} from '../../../../org/bukkit/configuration/file/FileConfigurationOptions.js'
import {ConfigurationOptions} from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import {MemoryConfigurationOptions} from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import {YamlConfiguration} from '../../../../org/bukkit/configuration/file/YamlConfiguration.js'
import {MemoryConfiguration} from '../../../../org/bukkit/configuration/MemoryConfiguration.js'
import {FileConfiguration} from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import {Configuration} from '../../../../org/bukkit/configuration/Configuration.js'

export interface YamlConfigurationOptions extends FileConfigurationOptions {
	pathSeparator(arg0: string): YamlConfigurationOptions;
	pathSeparator(arg0: string): FileConfigurationOptions;
	pathSeparator(arg0: string): ConfigurationOptions;
	pathSeparator(arg0: string): MemoryConfigurationOptions;
	indent(arg0: number): YamlConfigurationOptions;
	indent(): number;
	configuration(): YamlConfiguration;
	configuration(): MemoryConfiguration;
	configuration(): FileConfiguration;
	configuration(): Configuration;
	copyDefaults(arg0: boolean): MemoryConfigurationOptions;
	copyDefaults(arg0: boolean): YamlConfigurationOptions;
	copyDefaults(arg0: boolean): FileConfigurationOptions;
	copyDefaults(arg0: boolean): ConfigurationOptions;
	header(arg0: string): YamlConfigurationOptions;
	header(arg0: string): FileConfigurationOptions;
	copyHeader(arg0: boolean): FileConfigurationOptions;
	copyHeader(arg0: boolean): YamlConfigurationOptions;
	header(): string;
	copyHeader(): boolean;
	pathSeparator(): string;
	copyDefaults(): boolean;
}

export class YamlConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.YamlConfigurationOptions');
	}
}

