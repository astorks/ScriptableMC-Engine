declare var Java: any;
import {ConfigurationOptions} from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import {MemoryConfigurationOptions} from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import {MemoryConfiguration} from '../../../../org/bukkit/configuration/MemoryConfiguration.js'
import {Configuration} from '../../../../org/bukkit/configuration/Configuration.js'
import {FileConfiguration} from '../../../../org/bukkit/configuration/file/FileConfiguration.js'

export interface FileConfigurationOptions extends MemoryConfigurationOptions {
	pathSeparator(value: string): FileConfigurationOptions;
	pathSeparator(arg0: string): ConfigurationOptions;
	pathSeparator(arg0: string): MemoryConfigurationOptions;
	configuration(): MemoryConfiguration;
	configuration(): Configuration;
	configuration(): FileConfiguration;
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

