declare var Java: any;
import {Configuration} from '../../../../org/bukkit/configuration/Configuration.js'
import {MemoryConfiguration} from '../../../../org/bukkit/configuration/MemoryConfiguration.js'
import {FileConfiguration} from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import {MemoryConfigurationOptions} from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import {ConfigurationOptions} from '../../../../org/bukkit/configuration/ConfigurationOptions.js'

export interface FileConfigurationOptions extends MemoryConfigurationOptions {
	configuration(): Configuration;
	configuration(): MemoryConfiguration;
	configuration(): FileConfiguration;
	pathSeparator(arg0: string): MemoryConfigurationOptions;
	pathSeparator(value: string): FileConfigurationOptions;
	pathSeparator(arg0: string): ConfigurationOptions;
	header(): string;
	header(value: string): FileConfigurationOptions;
	copyDefaults(value: boolean): FileConfigurationOptions;
	copyDefaults(arg0: boolean): MemoryConfigurationOptions;
	copyDefaults(arg0: boolean): ConfigurationOptions;
	copyHeader(value: boolean): FileConfigurationOptions;
	copyHeader(): boolean;
	pathSeparator(): string;
	copyDefaults(): boolean;
}

export class FileConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.FileConfigurationOptions');
	}
}

