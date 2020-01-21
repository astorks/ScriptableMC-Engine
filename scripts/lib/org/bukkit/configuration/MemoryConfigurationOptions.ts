declare var Java: any;
import {ConfigurationOptions} from '../../../org/bukkit/configuration/ConfigurationOptions.js'
import {MemoryConfiguration} from '../../../org/bukkit/configuration/MemoryConfiguration.js'
import {Configuration} from '../../../org/bukkit/configuration/Configuration.js'

export interface MemoryConfigurationOptions extends ConfigurationOptions {
	pathSeparator(arg0: string): ConfigurationOptions;
	pathSeparator(arg0: string): MemoryConfigurationOptions;
	configuration(): MemoryConfiguration;
	configuration(): Configuration;
	copyDefaults(arg0: boolean): ConfigurationOptions;
	copyDefaults(arg0: boolean): MemoryConfigurationOptions;
	pathSeparator(): string;
	copyDefaults(): boolean;
}

export class MemoryConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.MemoryConfigurationOptions');
	}
}

