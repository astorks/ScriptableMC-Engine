declare var Java: any;
import {Configuration} from '../../../org/bukkit/configuration/Configuration.js'
import {MemoryConfiguration} from '../../../org/bukkit/configuration/MemoryConfiguration.js'
import {ConfigurationOptions} from '../../../org/bukkit/configuration/ConfigurationOptions.js'

export interface MemoryConfigurationOptions extends ConfigurationOptions {
	configuration(): Configuration;
	configuration(): MemoryConfiguration;
	pathSeparator(arg0: string): ConfigurationOptions;
	pathSeparator(value: string): MemoryConfigurationOptions;
	copyDefaults(value: boolean): MemoryConfigurationOptions;
	copyDefaults(arg0: boolean): ConfigurationOptions;
	pathSeparator(): string;
	copyDefaults(): boolean;
}

export class MemoryConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.MemoryConfigurationOptions');
	}
}

