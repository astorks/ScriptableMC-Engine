declare var Java: any;
import {ConfigurationOptions} from '../../../org/bukkit/configuration/ConfigurationOptions.js'
import {Configuration} from '../../../org/bukkit/configuration/Configuration.js'
import {MemoryConfiguration} from '../../../org/bukkit/configuration/MemoryConfiguration.js'

export interface MemoryConfigurationOptions extends ConfigurationOptions {
	pathSeparator(value: string): MemoryConfigurationOptions;
	pathSeparator(arg0: string): ConfigurationOptions;
	configuration(): Configuration;
	configuration(): MemoryConfiguration;
	copyDefaults(arg0: boolean): ConfigurationOptions;
	copyDefaults(value: boolean): MemoryConfigurationOptions;
	pathSeparator(): string;
	copyDefaults(): boolean;
}

export class MemoryConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.MemoryConfigurationOptions');
	}
}

