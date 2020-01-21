declare var Java: any;
import {MemoryConfigurationOptions} from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import {ConfigurationOptions} from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import {MemoryConfiguration} from '../../../../org/bukkit/configuration/MemoryConfiguration.js'
import {FileConfiguration} from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import {Configuration} from '../../../../org/bukkit/configuration/Configuration.js'

export interface FileConfigurationOptions extends MemoryConfigurationOptions {
	pathSeparator(arg0: string): FileConfigurationOptions;
	pathSeparator(arg0: string): MemoryConfigurationOptions;
	pathSeparator(arg0: string): ConfigurationOptions;
	configuration(): MemoryConfiguration;
	configuration(): FileConfiguration;
	configuration(): Configuration;
	copyDefaults(arg0: boolean): MemoryConfigurationOptions;
	copyDefaults(arg0: boolean): FileConfigurationOptions;
	copyDefaults(arg0: boolean): ConfigurationOptions;
	header(arg0: string): FileConfigurationOptions;
	header(): string;
	copyHeader(): boolean;
	copyHeader(arg0: boolean): FileConfigurationOptions;
	pathSeparator(): string;
	copyDefaults(): boolean;
}

export class FileConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.FileConfigurationOptions');
	}
}

